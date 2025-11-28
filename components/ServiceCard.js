import Image from "next/image"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const ServiceCard = ({ image, title, description, toolsTitle, tools }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Card
            className="group p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-border focus-within:shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardContent className="p-0">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                    <div
                        className={`w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center transition-all duration-500 ${
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
                    <h3 className="text-xl font-bold text-foreground mb-4 transition-all duration-300 transform group-hover:text-primary group-hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        {title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

                    {/* Tools */}
                    <div className="border-t border-border pt-6">
                        <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide transition-all duration-300 group-hover:text-primary/80">
                            {toolsTitle}
                        </h4>
                        <div className="flex flex-wrap justify-center gap-2">
                            {tools.map((tool, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-default transform hover:scale-105 hover:shadow-sm"
                                >
                                    {tool}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ServiceCard;