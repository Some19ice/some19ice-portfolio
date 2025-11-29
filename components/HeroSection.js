import Image from "next/image"
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
// import deved from "../public/dev-ed-wave.png"
import config from "../config"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import DashboardCard, { MetricCard } from "./DashboardCard"

const metrics = [
    { title: "Total Projects", value: "24", change: "+12% from last month", changeType: "positive", iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
    { title: "Revenue Growth", value: "400%", change: "Driven for clients", changeType: "positive", iconPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
    { title: "Technologies", value: "15+", change: "Python, GIS, React", changeType: "neutral", iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
    { title: "Years Experience", value: "7+", change: "Web2, Web3 & GIS", changeType: "neutral", iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
]

export default function HeroSection({ overviewLeftRef, overviewRightRef }) {
    return (
        <section id="overview" className="pt-24 pb-12 px-6 lg:px-8 relative z-10">
            <div ref={overviewLeftRef} className="absolute top-0 left-0 w-32 h-32 pointer-events-none" />
            <div ref={overviewRightRef} className="absolute top-0 right-0 w-32 h-32 pointer-events-none" />
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Yakubu 👋</h1>
                            <p className="text-muted-foreground">Senior Full Stack Engineer & Geospatial Specialist Dashboard</p>
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            🟢 Available for work
                        </Badge>
                    </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {metrics.map((m) => (
                        <MetricCard 
                            key={m.title} 
                            title={m.title}
                            value={m.value}
                            change={m.change}
                            changeType={m.changeType}
                            icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={m.iconPath} /></svg>}
                        />
                    ))}
                </div>

                {/* Profile & Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <DashboardCard className="lg:col-span-1" title="Developer Profile">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="relative">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-background">
                                        <Image src={deved} width={64} height={64} alt="Yakubu T. Umar" className="rounded-full object-cover" />
                                    </div>
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-secondary rounded-full border-2 border-background" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">Yakubu T. Umar</h3>
                                <p className="text-sm text-muted-foreground">Senior Scientific Officer</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Location</span><span className="text-foreground">Nigeria</span></div>
                            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Specialization</span><span className="text-foreground">GIS & Full Stack</span></div>
                            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Status</span><Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">Available</Badge></div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-border flex space-x-3">
                            {[{ href: config.socialMedia.github, Icon: AiFillGithub, label: "GitHub" },
                              { href: config.socialMedia.linkedin, Icon: AiFillLinkedin, label: "LinkedIn" },
                              { href: config.socialMedia.twitter, Icon: AiFillTwitterCircle, label: "Twitter" }].map(({ href, Icon, label }) => (
                                <a key={label} href={href} className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors" aria-label={label}>
                                    <Icon className="text-lg" />
                                </a>
                            ))}
                        </div>
                    </DashboardCard>

                    <DashboardCard className="lg:col-span-2" title="Quick Actions">
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { href: `mailto:${config.contactEmail}`, label: "Contact Me", color: "primary", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                                { href: "#portfolio", label: "View Projects", color: "secondary", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
                                { href: config.resumeUrl, label: "Download CV", color: "accent", icon: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                                { href: config.fundMeUrl, label: "Support Work", color: "accent", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
                            ].map(({ href, label, color, icon }) => (
                                <Button key={label} asChild className={`h-auto p-4 flex-col space-y-2 bg-${color}/10 hover:bg-${color}/20 text-${color} border-${color}/20`} variant="outline">
                                    <a href={href}>
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                                        </svg>
                                        <span className="text-sm font-medium">{label}</span>
                                    </a>
                                </Button>
                            ))}
                        </div>
                    </DashboardCard>
                </div>
            </div>
        </section>
    )
}
