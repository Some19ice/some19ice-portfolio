import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import DashboardCard from "./DashboardCard"
import ProjectCard from "./ProjectCard"
import portfolioProjects from "../data/portfolio"

export default function PortfolioSection({ portfolioRef }) {
    const [selectedCategory, setSelectedCategory] = useState("All Projects")

    // Use only local projects
    const allProjects = portfolioProjects

    // Filter projects based on selection
    const displayProjects = selectedCategory === "All Projects"
        ? allProjects
        : allProjects.filter((p) => p.category === selectedCategory)

    const stats = [
        { label: "Total Projects", value: allProjects.length, color: "primary" },
        { label: "Technologies", value: new Set(allProjects.flatMap((p) => p.technologies)).size, color: "secondary" },
        { label: "Categories", value: new Set(allProjects.map((p) => p.category)).size, color: "accent" },
        { label: "Live Demos", value: allProjects.filter((p) => p.demoUrl && p.demoUrl !== "#").length, color: "accent" },
    ]

    const categories = ["All Projects", ...Array.from(new Set(allProjects.map((p) => p.category).filter(Boolean)))]

    return (
        <section id="portfolio" className="py-20 px-6 lg:px-8 scroll-mt-24 relative z-10">
            <div ref={portfolioRef} className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-30" />
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-2">Recent Projects</h2>
                            <p className="text-muted-foreground">A showcase of my latest work and achievements</p>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                            <a href="#contact" className="flex items-center gap-2">
                                View All
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {stats.map((s) => (
                            <DashboardCard key={s.label} className="text-center" size="sm">
                                <div className="space-y-1">
                                    <div className={`text-2xl font-bold text-${s.color}`}>{s.value}</div>
                                    <div className="text-xs text-muted-foreground">{s.label}</div>
                                </div>
                            </DashboardCard>
                        ))}
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {categories.map((cat) => (
                            <Badge
                                key={cat}
                                variant={selectedCategory === cat ? "default" : "outline"}
                                className={`cursor-pointer transition-colors ${selectedCategory === cat ? "" : "hover:bg-muted/50"}`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayProjects.map((project, i) => (
                        <div key={project.codeUrl || project.id || i} className="group transition-all duration-300" style={{ animationDelay: `${i * 100}ms` }}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}