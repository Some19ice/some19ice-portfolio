import { useMemo } from "react"
import Image from "next/image"
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { BsGeoAlt, BsArrowRight } from "react-icons/bs"
import deved from "../public/dev-ed-wave.png"
import config from "../config"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import DashboardCard, { MetricCard } from "./DashboardCard"
import portfolioProjects from "../data/portfolio"

export default function HeroSection({ overviewLeftRef, overviewRightRef }) {
    // Calculate dynamic stats from actual data
    const stats = useMemo(() => {
        const totalProjects = portfolioProjects.length
        const allTechnologies = new Set(portfolioProjects.flatMap(p => p.technologies))
        const categories = new Set(portfolioProjects.map(p => p.category))
        
        return {
            projects: totalProjects,
            technologies: allTechnologies.size,
            categories: categories.size,
        }
    }, [])

    const metrics = [
        {
            title: "Projects Delivered",
            value: stats.projects.toString(),
            change: `Across ${stats.categories} domains`,
            changeType: "neutral",
            iconPath:
                "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
        },
        {
            title: "Client Impact",
            value: "400%",
            change: "Revenue growth driven",
            changeType: "positive",
            iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
        },
        {
            title: "Tech Stack",
            value: `${stats.technologies}+`,
            change: "Modern tools",
            changeType: "neutral",
            iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        },
        {
            title: "Experience",
            value: "7+",
            change: "Years building",
            changeType: "neutral",
            iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
        },
    ]

    return (
        <section id="overview" className="pt-20 pb-16 px-6 lg:px-8 relative z-10 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
            </div>

            <div
                ref={overviewLeftRef}
                className="absolute top-0 left-0 w-32 h-32 pointer-events-none"
            />
            <div
                ref={overviewRightRef}
                className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
            />
            
            <div className="max-w-7xl mx-auto relative">
                {/* Main Hero Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left: Text Content */}
                    <div className="space-y-6">
                        <Badge
                            variant="secondary"
                            className="bg-secondary/10 text-secondary border-secondary/20 px-4 py-1.5"
                        >
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                            </span>
                            Available for new projects
                        </Badge>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                            I build{" "}
                            <span className="text-primary">
                                geospatial systems
                            </span>{" "}
                            that make sense of complex data
                        </h1>
                        
                        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                            Senior Full Stack Engineer & GIS Specialist at NASRDA. 
                            I design and develop national-scale data portals, 
                            3D navigation systems, and enterprise applications.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <Button
                                asChild
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                            >
                                <a href="#portfolio">
                                    View My Work
                                    <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="border-border hover:bg-muted"
                            >
                                <a href={`mailto:${config.contactEmail}`}>
                                    Get In Touch
                                </a>
                            </Button>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 pt-4">
                            <span className="text-sm text-muted-foreground">Find me on</span>
                            <div className="flex gap-2">
                                {[
                                    { href: config.socialMedia.github, Icon: AiFillGithub, label: "GitHub" },
                                    { href: config.socialMedia.linkedin, Icon: AiFillLinkedin, label: "LinkedIn" },
                                    { href: config.socialMedia.twitter, Icon: AiFillTwitterCircle, label: "Twitter" },
                                ].map(({ href, Icon, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                                        aria-label={label}
                                    >
                                        <Icon className="text-xl" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual/Map Element */}
                    <div className="relative">
                        {/* Map-inspired visual */}
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Outer ring */}
                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-[spin_60s_linear_infinite]" />
                            
                            {/* Middle ring */}
                            <div className="absolute inset-8 rounded-full border border-secondary/30" />
                            
                            {/* Inner content */}
                            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-card via-card/80 to-card/60 border border-border/50 shadow-2xl flex items-center justify-center overflow-hidden">
                                {/* Grid overlay */}
                                <div className="absolute inset-0 opacity-10">
                                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#grid)" />
                                    </svg>
                                </div>
                                
                                {/* Profile image */}
                                <div className="relative z-10 w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-card">
                                    <Image
                                        src={deved}
                                        alt="Yakubu T. Umar"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Floating location markers */}
                            <div className="absolute top-8 right-12 p-3 bg-card rounded-xl border border-border/50 shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                                <BsGeoAlt className="text-primary text-xl" />
                            </div>
                            
                            <div className="absolute bottom-16 left-4 p-2 px-4 bg-card rounded-full border border-border/50 shadow-lg flex items-center gap-2">
                                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                                <span className="text-xs font-medium text-foreground">Nigeria</span>
                            </div>

                            {/* Tech badges floating */}
                            <div className="absolute top-1/4 -left-4 p-2 px-3 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 shadow-lg">
                                <span className="text-xs font-medium text-primary">GIS</span>
                            </div>
                            
                            <div className="absolute bottom-1/4 -right-4 p-2 px-3 bg-secondary/10 backdrop-blur-sm rounded-full border border-secondary/20 shadow-lg">
                                <span className="text-xs font-medium text-secondary">Next.js</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {metrics.map((m) => (
                        <MetricCard
                            key={m.title}
                            title={m.title}
                            value={m.value}
                            change={m.change}
                            changeType={m.changeType}
                            icon={
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
                                        d={m.iconPath}
                                    />
                                </svg>
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
