import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight, BsArrowRight } from "react-icons/bs";
import { Badge } from "@/components/ui/badge"

const ProjectCard = ({ project }) => {
    // Get category color
    const getCategoryColor = (category) => {
        const colors = {
            "GIS": "bg-primary/10 text-primary border-primary/20",
            "Full Stack": "bg-secondary/10 text-secondary border-secondary/20",
            "Web App": "bg-secondary/10 text-secondary border-secondary/20",
            Web3: "bg-accent/10 text-accent border-accent/20",
            Website: "bg-chart-4/10 text-chart-4 border-chart-4/20",
            Mobile: "bg-chart-3/10 text-chart-3 border-chart-3/20",
            default: "bg-muted/50 text-muted-foreground border-border",
        }
        return colors[category] || colors.default
    }

    return (
        <div className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/30">
            {/* Image Container - Larger */}
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Category Badge - Top Left */}
                <div className="absolute top-4 left-4 z-10">
                    <Badge
                        variant="outline"
                        className={`${getCategoryColor(project.category)} backdrop-blur-sm bg-opacity-90`}
                    >
                        {project.category || "Project"}
                    </Badge>
                </div>

                {/* Action Buttons - Top Right */}
                <div className="absolute top-4 right-4 flex gap-2 z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {project.codeUrl && project.codeUrl !== "#" && (
                        <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 bg-card/90 backdrop-blur-sm rounded-xl text-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 shadow-lg hover:scale-110"
                            title="View Source Code"
                        >
                            <AiFillGithub className="text-lg" />
                        </a>
                    )}
                    {project.demoUrl && project.demoUrl !== "#" && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 bg-card/90 backdrop-blur-sm rounded-xl text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:scale-110"
                            title="View Live Demo"
                        >
                            <BsBoxArrowUpRight className="text-lg" />
                        </a>
                    )}
                </div>

                {/* Live indicator */}
                {project.demoUrl && project.demoUrl !== "#" && (
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 z-10">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-medium text-white/90 backdrop-blur-sm">Live</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs px-2.5 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border/50 transition-all duration-300 hover:border-primary/30 hover:text-primary"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="text-xs px-2.5 py-1 rounded-full bg-muted/30 text-muted-foreground">
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </div>

                {/* Key Stats Grid - NEW */}
                {project.stats && (
                    <div className="grid grid-cols-3 gap-2 py-2">
                        {Object.entries(project.stats).map(([key, value], idx) => (
                            <div key={idx} className="bg-muted/30 p-1.5 rounded-lg text-center border border-border/30">
                                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{key}</div>
                                <div className="text-xs font-bold text-foreground truncate" title={value}>{value}</div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Footer */}
                <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        {project.codeUrl && project.codeUrl !== "#" && (
                            <span className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-sky-500 rounded-full" />
                                Open Source
                            </span>
                        )}
                    </div>
                    
                    {project.slug && (
                        <Link
                            href={`/projects/${project.slug}`}
                            className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors group/link"
                        >
                            Details
                            <BsArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    )}
                </div>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
            </div>
        </div>
    )
}

export default ProjectCard
