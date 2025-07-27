import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";

const ProjectCard = ({ project }) => {
    return (
        <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 overflow-hidden">
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden">
                <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                        {project.category}
                    </span>
                </div>
                
                {/* Action buttons on hover */}
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.demoUrl && project.demoUrl !== "#" && (
                        <a 
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/90 dark:bg-gray-900/90 rounded-full text-gray-900 dark:text-white hover:bg-teal-500 hover:text-white transition-colors backdrop-blur-sm"
                        >
                            <BsBoxArrowUpRight className="text-sm" />
                        </a>
                    )}
                    
                    {project.codeUrl && project.codeUrl !== "#" && (
                        <a 
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/90 dark:bg-gray-900/90 rounded-full text-gray-900 dark:text-white hover:bg-gray-700 hover:text-white transition-colors backdrop-blur-sm"
                        >
                            <AiFillGithub className="text-sm" />
                        </a>
                    )}
                </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
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
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:text-teal-700 dark:hover:text-teal-300 transition-colors cursor-default"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full text-xs font-medium cursor-default">
                            +{project.technologies.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
