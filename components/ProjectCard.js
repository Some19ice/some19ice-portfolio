import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useState } from "react"

const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isDemoHovered, setIsDemoHovered] = useState(false)
    const [isCodeHovered, setIsCodeHovered] = useState(false)

    return (
        <div
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover transition-all duration-500 ease-out ${
                        isHovered ? "scale-110" : "scale-100"
                    }`}
                />
                {/* Overlay */}
                <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-300 ${
                        isHovered ? "opacity-100" : "opacity-0"
                    }`}
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 transition-transform duration-300 hover:scale-105">
                    <span className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm shadow-sm">
                        {project.category}
                    </span>
                </div>

                {/* Action buttons on hover */}
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:transform md:translate-y-2 md:group-hover:translate-y-0">
                    {project.demoUrl && project.demoUrl !== "#" && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/90 dark:bg-gray-900/90 rounded-full text-gray-900 dark:text-white hover:bg-teal-500 hover:text-white transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                            onMouseEnter={() => setIsDemoHovered(true)}
                            onMouseLeave={() => setIsDemoHovered(false)}
                        >
                            <BsBoxArrowUpRight
                                className={`text-sm transition-all duration-200 ${
                                    isDemoHovered ? "scale-125 rotate-12" : "scale-100"
                                }`}
                            />
                        </a>
                    )}

                    {project.codeUrl && project.codeUrl !== "#" && (
                        <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/90 dark:bg-gray-900/90 rounded-full text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                            onMouseEnter={() => setIsCodeHovered(true)}
                            onMouseLeave={() => setIsCodeHovered(false)}
                        >
                            <AiFillGithub
                                className={`text-sm transition-all duration-200 ${
                                    isCodeHovered ? "scale-125 -rotate-12" : "scale-100"
                                }`}
                            />
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-all duration-300 transform group-hover:text-teal-600 dark:group-hover:text-teal-400 group-hover:translate-x-1">
                    {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:text-teal-700 dark:hover:text-teal-300 transition-all duration-300 cursor-default transform hover:scale-105 hover:shadow-sm"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full text-xs font-medium cursor-default transform hover:scale-105 transition-all duration-300">
                            +{project.technologies.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
