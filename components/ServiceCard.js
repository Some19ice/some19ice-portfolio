import Image from "next/image";
import { useState } from "react"

const ServiceCard = ({ image, title, description, toolsTitle, tools }) => {
    const [isHovered, setIsHovered] = useState(false)
    
    return (
        <div
            className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 focus-within:shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Icon */}
            <div className="mb-6 flex justify-center">
                <div
                    className={`w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isHovered ? "scale-110 rotate-3" : "scale-100"
                    }`}
                >
                    <Image
                        src={image}
                        width={32}
                        height={32}
                        alt={title}
                        className={`filter brightness-0 invert transition-all duration-300 ${
                            isHovered ? "scale-110" : "scale-100"
                        }`}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="text-center">
                <h3
                    className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-300 transform group-hover:text-teal-600 dark:group-hover:text-teal-400 group-hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                    tabIndex={0}
                >
                    {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {description}
                </p>

                {/* Tools */}
                <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
                    <h4 className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-3 uppercase tracking-wide transition-all duration-300 group-hover:text-teal-500 dark:group-hover:text-teal-300">
                        {toolsTitle}
                    </h4>
                    <div className="flex flex-wrap justify-center gap-2">
                        {tools.map((tool, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:text-teal-700 dark:hover:text-teal-300 transition-all duration-300 cursor-default transform hover:scale-105 hover:shadow-sm"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ServiceCard;