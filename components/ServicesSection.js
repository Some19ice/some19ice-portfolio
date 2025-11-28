import { Badge } from "@/components/ui/badge"
import DashboardCard from "./DashboardCard"

const services = [
    {
        title: "UI/UX Design",
        subtitle: "Design Systems",
        description: "User-centered approach",
        color: "primary",
        icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z",
        tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
    },
    {
        title: "Full Stack Development",
        subtitle: "Modern Stack",
        description: "Scalable applications",
        color: "secondary",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        tools: ["React", "Next.js", "Python", "Docker", "AWS"],
    },
    {
        title: "Web3 & Blockchain",
        subtitle: "Smart Contracts",
        description: "DeFi & NFT platforms",
        color: "accent",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        tools: ["Solidity", "Web3.js", "Ethers.js", "Hardhat"],
    },
    {
        title: "Geospatial Information Systems (GIS)",
        subtitle: "Mapping Solutions",
        description: "Advanced spatial analysis and 3D visualization",
        color: "primary",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        tools: ["Mapbox GL", "QGIS", "PostGIS", "OGC Standards"],
    },
]

export default function ServicesSection({ servicesRef }) {
    return (
        <section id="services" className="py-20 px-6 lg:px-8 bg-muted/20 relative z-10">
            <div ref={servicesRef} className="absolute inset-0 pointer-events-none opacity-20" />
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Services & Expertise</h2>
                    <p className="text-muted-foreground max-w-2xl">
                        Comprehensive development services from design to deployment, specializing in modern web technologies, GIS, and blockchain solutions.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((s) => (
                        <DashboardCard
                            key={s.title}
                            title={s.title}
                            description={s.description}
                            className={`group hover:shadow-lg hover:shadow-${s.color}/5 transition-all duration-300`}
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <div className={`w-12 h-12 bg-${s.color}/10 rounded-lg flex items-center justify-center`}>
                                    <svg className={`w-6 h-6 text-${s.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">{s.subtitle}</h3>
                                    <p className="text-sm text-muted-foreground">{s.description}</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {s.tools.map((tool) => (
                                    <Badge key={tool} variant="secondary" className={`text-xs bg-${s.color}/10 text-${s.color} border-${s.color}/20`}>
                                        {tool}
                                    </Badge>
                                ))}
                            </div>
                        </DashboardCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
