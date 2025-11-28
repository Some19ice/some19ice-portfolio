import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const ProjectCard = ({ project }) => {
    // Get category color
    const getCategoryColor = (category) => {
        const colors = {
            "Full Stack": "bg-primary/10 text-primary border-primary/20",
            "Web App": "bg-secondary/10 text-secondary border-secondary/20",
            Web3: "bg-accent/10 text-accent border-accent/20",
            Website: "bg-chart-4/10 text-chart-4 border-chart-4/20",
            Mobile: "bg-chart-3/10 text-chart-3 border-chart-3/20",
            default: "bg-muted/50 text-muted-foreground border-border",
        }
        return colors[category] || colors.default
    }

    return (
        <Card
            className="group bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
        >
            {/* Header */}
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <Badge
                        variant="outline"
                        className={`text-xs ${getCategoryColor(project.category)}`}
                    >
                        {project.category || "Project"}
                    </Badge>
                    <div className="flex items-center gap-2">
                        {project.demoUrl && project.demoUrl !== "#" && (
                            <div
                                className="w-2 h-2 bg-secondary rounded-full"
                                title="Live Demo Available"
                            ></div>
                        )}
                        {project.codeUrl && project.codeUrl !== "#" && (
                            <div
                                className="w-2 h-2 bg-sky-500 rounded-full"
                                title="Source Code Available"
                            ></div>
                        )}
                    </div>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                </CardTitle>
            </CardHeader>

            {/* Image */}
            <div className="relative h-40 w-full overflow-hidden mx-4 rounded-lg mb-4">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-all duration-500 ease-out rounded-lg group-hover:scale-105 scale-100"
                />
                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-all duration-300 rounded-lg opacity-60 group-hover:opacity-100"
                />

                {/* Action buttons */}
                <div className="absolute bottom-3 right-3 flex space-x-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                    {project.demoUrl && project.demoUrl !== "#" && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-background/90 rounded-lg text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-md transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring group/btn"
                            title="View Live Demo"
                        >
                            <BsBoxArrowUpRight
                                className="text-sm transition-all duration-200 group-hover/btn:scale-110 scale-100"
                            />
                        </a>
                    )}

                    {project.codeUrl && project.codeUrl !== "#" && (
                        <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-background/90 rounded-lg text-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-md transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring group/btn"
                            title="View Source Code"
                        >
                            <AiFillGithub
                                className="text-sm transition-all duration-200 group-hover/btn:scale-110 scale-100"
                            />
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <CardContent className="px-4 pb-4">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                            <Badge
                                key={index}
                                variant="outline"
                                className="text-xs bg-muted/50 hover:bg-muted transition-all duration-300 cursor-default"
                            >
                                {tech}
                            </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                            <Badge variant="outline" className="text-xs bg-muted/30">
                                +{project.technologies.length - 4}
                            </Badge>
                        )}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between pt-2 border-t border-border/50">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            {project.demoUrl && project.demoUrl !== "#" && (
                                <span className="flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                    Live
                                </span>
                            )}
                            {project.codeUrl && project.codeUrl !== "#" && (
                                <span className="flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                                    Open Source
                                </span>
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                            {project.slug && (
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="text-xs font-medium text-foreground hover:text-primary transition-colors"
                                >
                                    View Details
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProjectCard