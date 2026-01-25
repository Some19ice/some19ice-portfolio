import { useState, useMemo, useCallback } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import DashboardCard from "./DashboardCard"
import ProjectCard from "./ProjectCard"
import portfolioProjects from "../data/portfolio"
import config from "../config"

export default function PortfolioSection({ portfolioRef }) {
    const [selectedCategory, setSelectedCategory] = useState("All Projects")
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedTechnologies, setSelectedTechnologies] = useState([])

    // Use only local projects
    const allProjects = portfolioProjects

    // Get all unique technologies
    const allTechnologies = useMemo(
        () => Array.from(new Set(allProjects.flatMap((p) => p.technologies))).sort(),
        [allProjects]
    )

    // Filter projects with multiple criteria
    const displayProjects = useMemo(() => {
        let filtered = allProjects

        // Category filter
        if (selectedCategory !== "All Projects") {
            filtered = filtered.filter((p) => p.category === selectedCategory)
        }

        // Search filter (fuzzy search)
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase()
            filtered = filtered.filter(
                (p) =>
                    p.title.toLowerCase().includes(query) ||
                    p.description.toLowerCase().includes(query) ||
                    p.technologies.some((tech) => tech.toLowerCase().includes(query)) ||
                    p.category.toLowerCase().includes(query)
            )
        }

        // Technology filter
        if (selectedTechnologies.length > 0) {
            filtered = filtered.filter((p) =>
                selectedTechnologies.some((tech) => p.technologies.includes(tech))
            )
        }

        return filtered
    }, [allProjects, selectedCategory, searchQuery, selectedTechnologies])

    // Toggle technology filter
    const toggleTechnology = useCallback((tech) => {
        setSelectedTechnologies((prev) =>
            prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
        )
    }, [])

    // Clear all filters
    const clearFilters = useCallback(() => {
        setSelectedCategory("All Projects")
        setSearchQuery("")
        setSelectedTechnologies([])
    }, [])

    const stats = [
        { label: "Total Projects", value: allProjects.length, color: "primary" },
        {
            label: "Technologies",
            value: new Set(allProjects.flatMap((p) => p.technologies)).size,
            color: "secondary",
        },
        {
            label: "Categories",
            value: new Set(allProjects.map((p) => p.category)).size,
            color: "accent",
        },
        {
            label: "Filtered Results",
            value: displayProjects.length,
            color: displayProjects.length < allProjects.length ? "secondary" : "accent",
        },
    ]

    const categories = [
        "All Projects",
        ...Array.from(new Set(allProjects.map((p) => p.category).filter(Boolean))),
    ]

    const hasActiveFilters =
        selectedCategory !== "All Projects" || searchQuery || selectedTechnologies.length > 0

    return (
        <section id="portfolio" className="py-20 px-6 lg:px-8 scroll-mt-24 relative z-10">
            <div
                ref={portfolioRef}
                className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-30"
            />
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-2">
                                Recent Projects
                            </h2>
                            <p className="text-muted-foreground">
                                A showcase of my latest work and achievements
                            </p>
                        </div>
                        <div className="flex gap-2">
                            {hasActiveFilters && (
                                <Button variant="outline" size="sm" onClick={clearFilters}>
                                    Clear Filters
                                </Button>
                            )}
                            <Button variant="outline" size="sm" asChild>
                                <a
                                    href={config.socialMedia.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    View GitHub
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {stats.map((s) => (
                            <DashboardCard key={s.label} className="text-center" size="sm">
                                <div className="space-y-1">
                                    <div className={`text-2xl font-bold text-${s.color}`}>
                                        {s.value}
                                    </div>
                                    <div className="text-xs text-muted-foreground">{s.label}</div>
                                </div>
                            </DashboardCard>
                        ))}
                    </div>

                    {/* Enhanced Filters */}
                    <div className="space-y-6 mb-8">
                        {/* Search Bar */}
                        <div className="relative max-w-md">
                            <svg
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <Input
                                type="text"
                                placeholder="Search projects, technologies, or keywords..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50"
                                aria-label="Search projects"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                    aria-label="Clear search"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            )}
                        </div>

                        {/* Category Filters */}
                        <div className="space-y-3">
                            <h3 className="text-sm font-medium text-muted-foreground">Category</h3>
                            <div className="flex flex-wrap gap-2">
                                {categories.map((cat) => (
                                    <Badge
                                        key={cat}
                                        variant={selectedCategory === cat ? "default" : "outline"}
                                        className={`cursor-pointer transition-all hover:scale-105 ${
                                            selectedCategory === cat ? "" : "hover:bg-muted/50"
                                        }`}
                                        onClick={() => setSelectedCategory(cat)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) =>
                                            e.key === "Enter" && setSelectedCategory(cat)
                                        }
                                        aria-pressed={selectedCategory === cat}
                                    >
                                        {cat}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Technology Filters */}
                        {allTechnologies.length > 0 && (
                            <div className="space-y-3">
                                <h3 className="text-sm font-medium text-muted-foreground">
                                    Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {allTechnologies.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant={
                                                selectedTechnologies.includes(tech)
                                                    ? "default"
                                                    : "outline"
                                            }
                                            className={`cursor-pointer transition-all hover:scale-105 ${
                                                selectedTechnologies.includes(tech)
                                                    ? ""
                                                    : "hover:bg-muted/50"
                                            }`}
                                            onClick={() => toggleTechnology(tech)}
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) =>
                                                e.key === "Enter" && toggleTechnology(tech)
                                            }
                                            aria-pressed={selectedTechnologies.includes(tech)}
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Results Grid */}
                {displayProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayProjects.map((project, i) => (
                            <div
                                key={project.codeUrl || project.id || i}
                                className="group transition-all duration-300"
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-muted-foreground mb-4">
                            <svg
                                className="h-12 w-12 mx-auto mb-4 opacity-50"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <h3 className="text-lg font-medium mb-2">No projects found</h3>
                            <p className="text-sm">Try adjusting your filters or search terms</p>
                        </div>
                        <Button variant="outline" onClick={clearFilters}>
                            Clear All Filters
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}
