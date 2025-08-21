import React from "react"
import {
    LinesCanvas,
    CircuitLines,
    FlowingLines,
    NeonBorderLines,
    BackgroundGrid,
} from "./AnimatedLines"

const SectionSeparator = ({
    variant = "default",
    icon = null,
    className = "",
    showDots = false,
}) => {
    const variants = {
        default: "h-px bg-gradient-to-r from-transparent via-border to-transparent",
        thick: "h-0.5 bg-gradient-to-r from-transparent via-border to-transparent",
        dashed: "h-px bg-gradient-to-r from-transparent via-border to-transparent border-t border-dashed border-border",
        dotted: "h-px bg-gradient-to-r from-transparent via-border to-transparent border-t border-dotted border-border",
        wave: "h-2 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full",
        glow: "h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-lg shadow-primary/20",
    }

    if (icon) {
        return (
            <div className={`relative flex items-center justify-center py-8 ${className}`}>
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                </div>
                <div className="relative bg-background border-2 border-border rounded-full p-3">
                    {icon}
                </div>
                {showDots && (
                    <>
                        <div className="absolute left-1/4 w-2 h-2 bg-border rounded-full"></div>
                        <div className="absolute right-1/4 w-2 h-2 bg-border rounded-full"></div>
                    </>
                )}
            </div>
        )
    }

    return (
        <div className={`w-full ${variants[variant]} ${className}`}>
            {showDots && (
                <div className="relative flex justify-center items-center h-full">
                    <div className="absolute flex space-x-2">
                        <div className="w-1 h-1 bg-border rounded-full"></div>
                        <div className="w-1 h-1 bg-border rounded-full"></div>
                        <div className="w-1 h-1 bg-border rounded-full"></div>
                    </div>
                </div>
            )}
        </div>
    )
}

// Enhanced predefined separator components with animated lines
export const HeroSeparator = ({ className = "" }) => (
    <div className={`relative py-8 ${className}`}>
        <div className="relative h-24">
            <BackgroundGrid opacity={0.08} size={30} color="hsl(var(--secondary))" />
            <LinesCanvas camera={{ position: [0, 0, 12], fov: 65 }}>
                <NeonBorderLines width={16} height={4} color="hsl(var(--secondary))" />
                <CircuitLines count={15} color="hsl(var(--primary))" />
            </LinesCanvas>
        </div>
        <SectionSeparator variant="glow" />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-background px-6 py-3 rounded-lg border border-primary/30 shadow-lg shadow-primary/10">
                <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                    <div className="flex space-x-1">
                        <div className="w-1 h-6 bg-primary/40 animate-pulse"></div>
                        <div
                            className="w-1 h-4 bg-secondary/40 animate-pulse"
                            style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                            className="w-1 h-5 bg-accent/40 animate-pulse"
                            style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                            className="w-1 h-3 bg-primary/40 animate-pulse"
                            style={{ animationDelay: "0.3s" }}
                        ></div>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                </div>
            </div>
        </div>
    </div>
)

export const ServicesSeparator = ({ className = "" }) => (
    <div className={`relative py-8 ${className}`}>
        <div className="relative h-24">
            <BackgroundGrid opacity={0.08} size={30} color="hsl(var(--secondary))" />
            <LinesCanvas camera={{ position: [0, 0, 12], fov: 65 }}>
                <NeonBorderLines width={16} height={4} color="hsl(var(--secondary))" />
                <CircuitLines count={15} color="hsl(var(--primary))" />
            </LinesCanvas>
        </div>
        <SectionSeparator variant="glow" />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-background px-8 py-3 rounded-lg border border-secondary/30 shadow-lg shadow-secondary/10">
                <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                        <div className="w-1 h-1 rounded-full bg-secondary animate-ping"></div>
                        <div
                            className="w-1 h-1 rounded-full bg-secondary animate-ping"
                            style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                            className="w-1 h-1 rounded-full bg-secondary animate-ping"
                            style={{ animationDelay: "0.4s" }}
                        ></div>
                    </div>
                    <span className="text-sm font-bold text-secondary tracking-wider">
                        SERVICES
                    </span>
                    <div className="flex space-x-1">
                        <div className="w-1 h-1 rounded-full bg-secondary animate-ping"></div>
                        <div
                            className="w-1 h-1 rounded-full bg-secondary animate-ping"
                            style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                            className="w-1 h-1 rounded-full bg-secondary animate-ping"
                            style={{ animationDelay: "0.4s" }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export const PortfolioSeparator = ({ className = "" }) => (
    <div className={`relative py-8 ${className}`}>
        <div className="relative h-24">
            <BackgroundGrid opacity={0.08} size={30} color="hsl(var(--secondary))" />
            <LinesCanvas camera={{ position: [0, 0, 12], fov: 65 }}>
                <NeonBorderLines width={16} height={4} color="hsl(var(--secondary))" />
                <CircuitLines count={15} color="hsl(var(--primary))" />
            </LinesCanvas>
        </div>
        <SectionSeparator variant="glow" />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-background px-8 py-3 rounded-lg border border-accent/30 shadow-lg shadow-accent/10">
                <div className="flex items-center space-x-4">
                    <div className="flex flex-col space-y-1">
                        <div className="w-4 h-0.5 bg-accent rounded animate-pulse"></div>
                        <div
                            className="w-3 h-0.5 bg-accent/60 rounded animate-pulse"
                            style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                            className="w-2 h-0.5 bg-accent/40 rounded animate-pulse"
                            style={{ animationDelay: "0.2s" }}
                        ></div>
                    </div>
                    <span className="text-sm font-bold text-accent tracking-wider">PORTFOLIO</span>
                    <div className="flex flex-col space-y-1">
                        <div className="w-4 h-0.5 bg-accent rounded animate-pulse"></div>
                        <div
                            className="w-3 h-0.5 bg-accent/60 rounded animate-pulse"
                            style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                            className="w-2 h-0.5 bg-accent/40 rounded animate-pulse"
                            style={{ animationDelay: "0.2s" }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export const ContactSeparator = ({ className = "" }) => (
    <div className={`relative py-8 ${className}`}>
        <div className="relative h-24">
            <BackgroundGrid opacity={0.08} size={30} color="hsl(var(--secondary))" />
            <LinesCanvas camera={{ position: [0, 0, 12], fov: 65 }}>
                <NeonBorderLines width={16} height={4} color="hsl(var(--secondary))" />
                <CircuitLines count={15} color="hsl(var(--primary))" />
            </LinesCanvas>
        </div>
        <SectionSeparator variant="glow" />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-background px-8 py-3 rounded-lg border border-accent/30 shadow-lg shadow-accent/10">
                <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                    <div className="flex items-center space-x-1">
                        <span className="text-sm font-bold text-accent tracking-wider">CON</span>
                        <div className="w-0.5 h-4 bg-accent/60 animate-pulse"></div>
                        <span className="text-sm font-bold text-accent tracking-wider">
                            TACT
                        </span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                </div>
            </div>
        </div>
    </div>
)

export default SectionSeparator
