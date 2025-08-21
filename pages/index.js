import Head from "next/head";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { BsFillMoonStarsFill } from "react-icons/bs"
import { useEffect, useState } from "react"
import deved from "../public/dev-ed-wave.png"
import code from "../public/code.png"
import design from "../public/design.png"
import consulting from "../public/consulting.png"
import Image from "next/image"
import PortfolioIntro from "../components/PortfolioIntro"
import ServiceCard from "../components/ServiceCard"
import ProjectCard from "../components/ProjectCard"
import ContactSection from "../components/ContactSection"
import config from "../config"
import portfolioProjects from "../data/portfolio"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import SectionSeparator, {
    HeroSeparator,
    ServicesSeparator,
    PortfolioSeparator,
    ContactSeparator,
} from "../components/SectionSeparator"
import { LinesCanvas, CircuitLines, RadarSweep, BackgroundGrid } from "../components/AnimatedLines"
import DashboardCard, {
    MetricCard,
    ChartCard,
    ProgressCard,
    StatCard,
} from "../components/DashboardCard"

export default function Home({ featuredGithubProjects = [] }) {
    const [darkMode, setDarkMode] = useState(true) // Default to dark mode for dashboard design

    // Persist and initialize dark mode based on system preference
    useEffect(() => {
        const stored = typeof window !== "undefined" ? localStorage.getItem("darkMode") : null
        if (stored !== null) {
            setDarkMode(stored === "true")
        } else if (typeof window !== "undefined" && window.matchMedia) {
            // Default to dark mode for dashboard aesthetic
            setDarkMode(true)
        }
    }, [])

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("darkMode", String(darkMode))
        }
    }, [darkMode])

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Yakubu T. Umar - Full Stack Developer & Entrepreneur</title>
                <meta
                    name="description"
                    content="Full Stack developer who uses code to provide services for business needs. Specializing in React, Next.js, Node, Express, Solidity, and EVM."
                />
                <link
                    rel="icon"
                    href="https://some19ice.github.io/some19ice-portfolio/favicon.ico"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="keywords"
                    content="Full Stack Developer, React, Next.js, Node, Express, Solidity, EVM, Web3, Blockchain, Entrepreneur"
                />
                <meta name="author" content="Yakubu T. Umar" />
                <meta
                    property="og:title"
                    content="Yakubu T. Umar - Full Stack Developer & Entrepreneur"
                />
                <meta
                    property="og:description"
                    content="Full Stack developer who uses code to provide services for business needs. Specializing in React, Next.js, Node, Express, Solidity, and EVM."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://some19ice.github.io/some19ice-portfolio" />
                <meta
                    property="og:image"
                    content="https://some19ice.github.io/some19ice-portfolio/web1.png"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Yakubu T. Umar - Full Stack Developer & Entrepreneur"
                />
                <meta
                    name="twitter:description"
                    content="Full Stack developer who uses code to provide services for business needs. Specializing in React, Next.js, Node, Express, Solidity, and EVM."
                />
                <meta
                    name="twitter:image"
                    content="https://some19ice.github.io/some19ice-portfolio/web1.png"
                />
            </Head>
            <main className="min-h-screen bg-background transition-colors duration-300 relative">
                {/* Background Lines Canvas - Always present */}
                <div className="fixed inset-0 pointer-events-none z-0">
                    <BackgroundGrid opacity={0.03} size={40} color="hsl(var(--primary))" />
                </div>
                {/* Enhanced Dashboard Navigation */}
                <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            {/* Brand and Main Navigation */}
                            <div className="flex items-center space-x-8">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">YU</span>
                                    </div>
                                    <div
                                        className="font-burtons text-xl text-foreground"
                                        aria-label="some19ice brand"
                                    >
                                        some19ice
                                    </div>
                                </div>

                                {/* Separator */}
                                <div className="hidden lg:block w-px h-6 bg-border/50"></div>

                                {/* Main Navigation */}
                                <div className="hidden md:flex items-center space-x-6 text-sm">
                                    <a
                                        href="#overview"
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-primary bg-primary/10 border border-primary/20 transition-all duration-200"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"
                                            />
                                        </svg>
                                        Dashboard
                                    </a>
                                    <a
                                        href="#services"
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                            />
                                        </svg>
                                        Services
                                    </a>
                                    <a
                                        href="#portfolio"
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                            />
                                        </svg>
                                        Projects
                                    </a>
                                    <a
                                        href="#contact"
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                        Contact
                                    </a>
                                </div>
                            </div>

                            {/* Right Side Actions */}
                            <div className="flex items-center space-x-4">
                                {/* Status Indicator */}
                                <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-secondary/10 rounded-lg border border-secondary/20">
                                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                                    <span className="text-xs text-secondary font-medium">
                                        Available
                                    </span>
                                </div>

                                {/* Separator */}
                                <div className="hidden lg:block w-px h-6 bg-border/50"></div>

                                {/* External Links */}
                                <div className="flex items-center space-x-2">
                                    <a
                                        href={config.resumeUrl}
                                        className="p-2 rounded-lg bg-card/50 hover:bg-card transition-colors border border-border/50 text-muted-foreground hover:text-foreground"
                                        aria-label="View resume"
                                        title="Download Resume"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href={config.socialMedia.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-card/50 hover:bg-card transition-colors border border-border/50 text-muted-foreground hover:text-foreground"
                                        aria-label="GitHub profile"
                                        title="GitHub Profile"
                                    >
                                        <AiFillGithub className="w-4 h-4" />
                                    </a>
                                    <button
                                        onClick={() => setDarkMode(!darkMode)}
                                        aria-label="Toggle dark mode"
                                        aria-pressed={darkMode}
                                        className="p-2 rounded-lg bg-card/50 hover:bg-card transition-colors border border-border/50 text-muted-foreground hover:text-foreground"
                                        title="Toggle Theme"
                                    >
                                        {darkMode ? (
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                                />
                                            </svg>
                                        ) : (
                                            <BsFillMoonStarsFill className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>

                                {/* Mobile Menu Button */}
                                <button className="md:hidden p-2 rounded-lg bg-card/50 hover:bg-card transition-colors border border-border/50">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Mobile Navigation */}
                        <div className="md:hidden border-t border-border/50 py-4">
                            <div className="flex flex-col space-y-2">
                                <a
                                    href="#overview"
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-primary bg-primary/10 border border-primary/20"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                                        />
                                    </svg>
                                    Dashboard
                                </a>
                                <a
                                    href="#services"
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                        />
                                    </svg>
                                    Services
                                </a>
                                <a
                                    href="#portfolio"
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                        />
                                    </svg>
                                    Projects
                                </a>
                                <a
                                    href="#contact"
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Separator with Lines */}
                <HeroSeparator />

                {/* Dashboard Overview Section */}
                <section id="overview" className="pt-24 pb-12 px-6 lg:px-8 relative z-10">
                    {/* Animated Corner Lines */}
                    <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none">
                        <LinesCanvas camera={{ position: [0, 0, 8], fov: 50 }}>
                            <CircuitLines count={8} color="hsl(var(--primary))" />
                        </LinesCanvas>
                    </div>
                    <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none">
                        <LinesCanvas camera={{ position: [0, 0, 8], fov: 50 }}>
                            <RadarSweep radius={3} color="hsl(var(--secondary))" sweepSpeed={0.5} />
                        </LinesCanvas>
                    </div>
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h1 className="text-3xl font-bold text-foreground mb-2">
                                        Welcome back, Yakubu 👋
                                    </h1>
                                    <p className="text-muted-foreground">
                                        Full Stack Developer & Entrepreneur Dashboard
                                    </p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Badge
                                        variant="secondary"
                                        className="bg-primary/10 text-primary border-primary/20"
                                    >
                                        🟢 Available for work
                                    </Badge>
                                </div>
                            </div>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <MetricCard
                                title="Total Projects"
                                value="24"
                                change="+12% from last month"
                                changeType="positive"
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
                                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                        />
                                    </svg>
                                }
                            />
                            <MetricCard
                                title="Client Satisfaction"
                                value="98.5%"
                                change="+2.1% from last month"
                                changeType="positive"
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
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        />
                                    </svg>
                                }
                            />
                            <MetricCard
                                title="Technologies"
                                value="15+"
                                change="React, Node, Solidity"
                                changeType="neutral"
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
                                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                        />
                                    </svg>
                                }
                            />
                            <MetricCard
                                title="Years Experience"
                                value="5+"
                                change="Web2 & Web3"
                                changeType="neutral"
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
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                }
                            />
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Profile Card */}
                            <DashboardCard className="lg:col-span-1" title="Developer Profile">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="relative">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5">
                                            <div className="w-full h-full rounded-full overflow-hidden bg-background">
                                                <Image
                                                    src={deved}
                                                    width={64}
                                                    height={64}
                                                    alt="Yakubu T. Umar"
                                                    className="rounded-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-secondary rounded-full border-2 border-background"></div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">
                                            Yakubu T. Umar
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            Full Stack Developer
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Location</span>
                                        <span className="text-foreground">Nigeria</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">
                                            Specialization
                                        </span>
                                        <span className="text-foreground">Web2 & Web3</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Status</span>
                                        <Badge
                                            variant="secondary"
                                            className="bg-secondary/10 text-secondary border-secondary/20"
                                        >
                                            Available
                                        </Badge>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-border">
                                    <div className="flex space-x-3">
                                        <a
                                            href={config.socialMedia.github}
                                            className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                                            aria-label="GitHub"
                                        >
                                            <AiFillGithub className="text-lg" />
                                        </a>
                                        <a
                                            href={config.socialMedia.linkedin}
                                            className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                                            aria-label="LinkedIn"
                                        >
                                            <AiFillLinkedin className="text-lg" />
                                        </a>
                                        <a
                                            href={config.socialMedia.twitter}
                                            className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                                            aria-label="Twitter"
                                        >
                                            <AiFillTwitterCircle className="text-lg" />
                                        </a>
                                    </div>
                                </div>
                            </DashboardCard>

                            {/* Quick Actions */}
                            <DashboardCard className="lg:col-span-2" title="Quick Actions">
                                <div className="grid grid-cols-2 gap-4">
                                    <Button
                                        asChild
                                        className="h-auto p-4 flex-col space-y-2 bg-primary/10 hover:bg-primary/20 text-primary border-primary/20"
                                        variant="outline"
                                    >
                                        <a href={`mailto:${config.contactEmail}`}>
                                            <svg
                                                className="h-6 w-6"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                            <span className="text-sm font-medium">Contact Me</span>
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        className="h-auto p-4 flex-col space-y-2 bg-secondary/10 hover:bg-secondary/20 text-secondary border-secondary/20"
                                        variant="outline"
                                    >
                                        <a href="#portfolio">
                                            <svg
                                                className="h-6 w-6"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                />
                                            </svg>
                                            <span className="text-sm font-medium">
                                                View Projects
                                            </span>
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        className="h-auto p-4 flex-col space-y-2 bg-accent/10 hover:bg-accent/20 text-accent border-accent/20"
                                        variant="outline"
                                    >
                                        <a href={config.resumeUrl}>
                                            <svg
                                                className="h-6 w-6"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                />
                                            </svg>
                                            <span className="text-sm font-medium">Download CV</span>
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        className="h-auto p-4 flex-col space-y-2 bg-accent/10 hover:bg-accent/20 text-accent border-accent/20"
                                        variant="outline"
                                    >
                                        <a href={config.fundMeUrl}>
                                            <svg
                                                className="h-6 w-6"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                />
                                            </svg>
                                            <span className="text-sm font-medium">
                                                Support Work
                                            </span>
                                        </a>
                                    </Button>
                                </div>
                            </DashboardCard>
                        </div>
                    </div>
                </section>

                {/* Services Separator with Lines */}
                <ServicesSeparator />

                {/* Services Section */}
                <section id="services" className="py-20 px-6 lg:px-8 bg-muted/20 relative z-10">
                    {/* Floating Circuit Lines */}
                    <div className="absolute inset-0 pointer-events-none opacity-20">
                        <LinesCanvas camera={{ position: [0, 0, 20], fov: 80 }}>
                            <CircuitLines count={30} color="hsl(var(--secondary))" />
                        </LinesCanvas>
                    </div>
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                                Services & Expertise
                            </h2>
                            <p className="text-muted-foreground max-w-2xl">
                                Comprehensive development services from design to deployment,
                                specializing in modern web technologies and blockchain solutions.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <DashboardCard
                                title="UI/UX Design"
                                description="Modern, responsive designs"
                                className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                            >
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <svg
                                            className="w-6 h-6 text-primary"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">
                                            Design Systems
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            User-centered approach
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex flex-wrap gap-2">
                                        {["Figma", "Adobe XD", "Photoshop", "Illustrator"].map(
                                            (tool) => (
                                                <Badge
                                                    key={tool}
                                                    variant="secondary"
                                                    className="text-xs bg-primary/10 text-primary border-primary/20"
                                                >
                                                    {tool}
                                                </Badge>
                                            )
                                        )}
                                    </div>
                                </div>
                            </DashboardCard>

                            <DashboardCard
                                title="Full Stack Development"
                                description="End-to-end web solutions"
                                className="group hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300"
                            >
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                                        <svg
                                            className="w-6 h-6 text-secondary"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">
                                            Modern Stack
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            Scalable applications
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex flex-wrap gap-2">
                                        {["React", "Next.js", "Node.js", "TypeScript"].map(
                                            (tech) => (
                                                <Badge
                                                    key={tech}
                                                    variant="secondary"
                                                    className="text-xs bg-secondary/10 text-secondary border-secondary/20"
                                                >
                                                    {tech}
                                                </Badge>
                                            )
                                        )}
                                    </div>
                                </div>
                            </DashboardCard>

                            <DashboardCard
                                title="Web3 & Blockchain"
                                description="Decentralized solutions"
                                className="group hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                            >
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                                        <svg
                                            className="w-6 h-6 text-accent"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">
                                            Smart Contracts
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            DeFi & NFT platforms
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex flex-wrap gap-2">
                                        {["Solidity", "Web3.js", "Ethers.js", "Hardhat"].map(
                                            (tool) => (
                                                <Badge
                                                    key={tool}
                                                    variant="secondary"
                                                    className="text-xs bg-accent/10 text-accent border-accent/20"
                                                >
                                                    {tool}
                                                </Badge>
                                            )
                                        )}
                                    </div>
                                </div>
                            </DashboardCard>
                        </div>
                    </div>
                </section>

                {/* Portfolio Separator with Lines */}
                <PortfolioSeparator />

                {/* Portfolio Section */}
                <section id="portfolio" className="py-20 px-6 lg:px-8 scroll-mt-24 relative z-10">
                    {/* Portfolio Background Lines */}
                    <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-30">
                        <LinesCanvas camera={{ position: [0, 0, 12], fov: 60 }}>
                            <RadarSweep radius={4} color="hsl(var(--accent))" sweepSpeed={0.3} />
                        </LinesCanvas>
                    </div>
                    <div className="max-w-7xl mx-auto">
                        {/* Header with Stats */}
                        <div className="mb-12">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-foreground mb-2">
                                        Recent Projects
                                    </h2>
                                    <p className="text-muted-foreground">
                                        A showcase of my latest work and achievements
                                    </p>
                                </div>
                                <Button variant="outline" size="sm">
                                    <a href="#contact" className="flex items-center gap-2">
                                        View All
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
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </a>
                                </Button>
                            </div>

                            {/* Project Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                <DashboardCard className="text-center" size="sm">
                                    <div className="space-y-1">
                                        <div className="text-2xl font-bold text-primary">
                                            {
                                                (featuredGithubProjects.length > 0
                                                    ? featuredGithubProjects
                                                    : portfolioProjects
                                                ).length
                                            }
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            Total Projects
                                        </div>
                                    </div>
                                </DashboardCard>
                                <DashboardCard className="text-center" size="sm">
                                    <div className="space-y-1">
                                        <div className="text-2xl font-bold text-secondary">
                                            {
                                                new Set(
                                                    (featuredGithubProjects.length > 0
                                                        ? featuredGithubProjects
                                                        : portfolioProjects
                                                    ).flatMap((p) => p.technologies)
                                                ).size
                                            }
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            Technologies
                                        </div>
                                    </div>
                                </DashboardCard>
                                <DashboardCard className="text-center" size="sm">
                                    <div className="space-y-1">
                                        <div className="text-2xl font-bold text-accent">
                                            {
                                                new Set(
                                                    (featuredGithubProjects.length > 0
                                                        ? featuredGithubProjects
                                                        : portfolioProjects
                                                    ).map((p) => p.category)
                                                ).size
                                            }
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            Categories
                                        </div>
                                    </div>
                                </DashboardCard>
                                <DashboardCard className="text-center" size="sm">
                                    <div className="space-y-1">
                                        <div className="text-2xl font-bold text-accent">
                                            {
                                                (featuredGithubProjects.length > 0
                                                    ? featuredGithubProjects
                                                    : portfolioProjects
                                                ).filter((p) => p.demoUrl && p.demoUrl !== "#")
                                                    .length
                                            }
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            Live Demos
                                        </div>
                                    </div>
                                </DashboardCard>
                            </div>

                            {/* Category Filter */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                <Badge
                                    variant="outline"
                                    className="bg-primary/10 text-primary border-primary/20"
                                >
                                    All Projects
                                </Badge>
                                {Array.from(
                                    new Set(
                                        (featuredGithubProjects.length > 0
                                            ? featuredGithubProjects
                                            : portfolioProjects
                                        )
                                            .map((p) => p.category)
                                            .filter(Boolean)
                                    )
                                ).map((category) => (
                                    <Badge
                                        key={category}
                                        variant="outline"
                                        className="hover:bg-muted/50 transition-colors cursor-pointer"
                                    >
                                        {category}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {(featuredGithubProjects.length > 0
                                ? featuredGithubProjects
                                : portfolioProjects
                            ).map((project, index) => (
                                <div
                                    key={`${project.codeUrl || project.id}`}
                                    className="group transition-all duration-300"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <ProjectCard project={project} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Separator */}
                <ContactSeparator />

                {/* Contact Section */}
                <ContactSection />
            </main>
        </div>
    )
}

export async function getStaticProps() {
    const githubCfg = config.github || {}
    const headers = {
        Accept: "application/vnd.github+json",
        "User-Agent": "some19ice-portfolio",
        "X-GitHub-Api-Version": "2022-11-28",
    }
    // Support optional GH token via env for higher rate limits (safe at build time)
    if (process.env.GITHUB_TOKEN) {
        headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`
    }

    const toProjectCard = (repo) => {
        const homepage =
            repo.homepage && repo.homepage.trim().length > 0 ? repo.homepage : undefined
        // Use social preview image if available via OpenGraph. If not, fall back to a generic image from public
        const image = `https://opengraph.githubassets.com/1/${repo.full_name}`
        const description = repo.description || ""
        const topics = Array.isArray(repo.topics) ? repo.topics : []
        const language = repo.language ? [repo.language] : []
        return {
            id: repo.id,
            title: repo.name,
            description,
            image,
            technologies: [...language, ...topics].slice(0, 6),
            demoUrl: homepage || (repo.html_url ? `${repo.html_url}#readme` : "#"),
            codeUrl: repo.html_url,
            category: repo.language || "GitHub",
        }
    }

    let repos = []
    try {
        if (githubCfg.selectedRepos && githubCfg.selectedRepos.length > 0) {
            const fetches = githubCfg.selectedRepos.map((name) =>
                fetch(`https://api.github.com/repos/${githubCfg.username}/${name}`, {
                    headers,
                }).then((r) => (r.ok ? r.json() : null))
            )
            const results = await Promise.all(fetches)
            repos = results.filter(Boolean)
        } else if (githubCfg.useTopics && githubCfg.topic) {
            // Search by topic
            const q = `user:${githubCfg.username}+topic:${githubCfg.topic}`
            const res = await fetch(
                `https://api.github.com/search/repositories?q=${encodeURIComponent(q)}&per_page=9`,
                { headers }
            )
            if (res.ok) {
                const data = await res.json()
                repos = data.items || []
            }
            // Fallback if none found by topic
            if (!repos || repos.length === 0) {
                const res2 = await fetch(
                    `https://api.github.com/users/${githubCfg.username}/repos?per_page=12&sort=updated`,
                    { headers }
                )
                if (res2.ok) {
                    const data2 = await res2.json()
                    repos = data2.filter((r) => !r.fork).slice(0, 6)
                }
            }
        } else {
            // Default: pick top starred repos (excluding forks)
            const res = await fetch(
                `https://api.github.com/users/${githubCfg.username}/repos?per_page=12&sort=updated`,
                { headers }
            )
            if (res.ok) {
                const data = await res.json()
                repos = data.filter((r) => !r.fork).slice(0, 6)
            }
        }
    } catch (e) {
        // Log error during dev
        if (process.env.NODE_ENV !== "production") {
            // eslint-disable-next-line no-console
            console.error("GitHub fetch error:", e)
        }
        repos = []
    }

    const featuredGithubProjects = repos.map(toProjectCard)

    // Dedupe against local list by codeUrl
    const localCodeUrls = new Set(portfolioProjects.map((p) => p.codeUrl))
    const deduped = featuredGithubProjects.filter((p) => !localCodeUrls.has(p.codeUrl))

    return {
        props: {
            featuredGithubProjects: deduped,
        },
    }
}
