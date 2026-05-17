import Head from "next/head"
import dynamic from "next/dynamic"
import { useRef, useState, useCallback } from "react"
import { Canvas } from "@react-three/fiber"
import { View } from "@react-three/drei"

import Navigation from "../components/Navigation"
import HeroSection from "../components/HeroSection"
import ServicesSection from "../components/ServicesSection"
import PortfolioSection from "../components/PortfolioSection"
import ContactSection from "../components/ContactSection"
import ErrorBoundary from "../components/ErrorBoundary"
import {
    HeroSeparator,
    ServicesSeparator,
    PortfolioSeparator,
    ContactSeparator,
} from "../components/SectionSeparator"
import portfolioProjects from "../data/portfolio"
import useDarkMode from "../lib/useDarkMode"

const CircuitLines = dynamic(
    () => import("../components/AnimatedLines").then((mod) => ({ default: mod.CircuitLines })),
    { ssr: false }
)
const RadarSweep = dynamic(
    () => import("../components/AnimatedLines").then((mod) => ({ default: mod.RadarSweep })),
    { ssr: false }
)
const LivingGlobe = dynamic(() => import("../components/LivingGlobe"), { ssr: false })
const ChatTerminal = dynamic(() => import("../components/ChatTerminal"), { ssr: false })

export default function Home() {
    const { darkMode, setDarkMode } = useDarkMode()
    const [globeTarget, setGlobeTarget] = useState(null)
    const [activeLayer, setActiveLayer] = useState(null)

    const handleCommand = useCallback((action) => {
        if (Number.isFinite(action?.lat) && Number.isFinite(action?.lng)) {
            setGlobeTarget({
                lat: action.lat,
                lng: action.lng,
                altitude: action.altitude || 1.5,
            })
        }
        if (action?.layer) {
            setActiveLayer(action.layer)
        } else {
            setActiveLayer(null)
        }
    }, [])

    const mainRef = useRef(null)
    const overviewLeftRef = useRef(null)
    const overviewRightRef = useRef(null)
    const servicesRef = useRef(null)
    const portfolioRef = useRef(null)

    // Generate structured data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Yakubu T. Umar",
        jobTitle: "Senior Full Stack Engineer & Geospatial Specialist",
        description:
            "Senior Scientific Officer specializing in Geospatial Information Systems (GIS), Next.js, national-scale data portals, and 3D navigation systems.",
        url: "https://some19ice.github.io/some19ice-portfolio",
        image: "https://some19ice.github.io/some19ice-portfolio/avatar.png",
        sameAs: [
            "https://github.com/Some19ice",
            "https://linkedin.com/in/yakubu-umar",
            "https://twitter.com/some19ice",
        ],
        knowsAbout: [
            "Geospatial Information Systems",
            "Next.js",
            "React",
            "Node.js",
            "Python",
            "GIS",
            "Web3",
            "Full Stack Development",
        ],
        worksFor: {
            "@type": "Organization",
            name: "National Space Research and Development Agency (NASRDA)",
        },
        alumniOf: {
            "@type": "EducationalOrganization",
            name: "Federal University of Technology, Minna",
        },
        offers: {
            "@type": "Offer",
            itemOffered: {
                "@type": "Service",
                serviceType: [
                    "Full Stack Development",
                    "GIS Consulting",
                    "Web3 Development",
                    "Technical Consulting",
                ],
            },
            availableAtOrFrom: {
                "@type": "Place",
                name: "Nigeria",
                address: {
                    "@type": "PostalAddress",
                    addressCountry: "Nigeria",
                },
            },
        },
    }

    // Project structured data
    const projectStructuredData = portfolioProjects.map((project) => ({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        url: project.codeUrl,
        image: `https://some19ice.github.io/some19ice-portfolio${project.image}`,
        programmingLanguage: project.technologies,
        genre: project.category,
        author: {
            "@type": "Person",
            name: "Yakubu T. Umar",
        },
    }))

    return (
        <div className="">
            <Head>
                <title>Yakubu T. Umar - Senior Full Stack Engineer & Geospatial Specialist</title>
                <meta
                    name="description"
                    content="Senior Scientific Officer specializing in Geospatial Information Systems (GIS), Next.js, national-scale data portals, and 3D navigation systems."
                />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="keywords"
                    content="Senior Full Stack Engineer, Geospatial Specialist, GIS, Next.js, Mapbox, React, Node, Python, Scientific Officer"
                />
                <meta name="author" content="Yakubu T. Umar" />
                <meta
                    property="og:title"
                    content="Yakubu T. Umar - Senior Full Stack Engineer & Geospatial Specialist"
                />
                <meta
                    property="og:description"
                    content="Senior Scientific Officer specializing in Geospatial Information Systems (GIS), Next.js, national-scale data portals, and 3D navigation systems."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://some19ice.github.io/some19ice-portfolio" />
                <meta property="og:image" content="/web1.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Yakubu T. Umar - Senior Full Stack Engineer & Geospatial Specialist"
                />
                <meta
                    name="twitter:description"
                    content="Senior Scientific Officer specializing in Geospatial Information Systems (GIS), Next.js, national-scale data portals, and 3D navigation systems."
                />
                <meta name="twitter:image" content="/web1.png" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData, null, 2),
                    }}
                />
                {projectStructuredData.map((project, index) => (
                    <script
                        key={index}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(project, null, 2),
                        }}
                    />
                ))}
            </Head>

            <main
                ref={mainRef}
                className="min-h-screen bg-background transition-colors duration-300 relative"
            >
                {/* Background: Living Globe */}
                <div className="fixed inset-0 z-0">
                    <ErrorBoundary>
                        <LivingGlobe
                            targetLocation={globeTarget}
                            activeLayer={activeLayer}
                            onGlobeReady={() => {}}
                        />
                    </ErrorBoundary>
                </div>
                <Canvas
                    eventSource={mainRef}
                    className="fixed inset-0 pointer-events-none z-0"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                >
                    <View.Port />
                </Canvas>

                <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
                <HeroSeparator />
                <HeroSection
                    overviewLeftRef={overviewLeftRef}
                    overviewRightRef={overviewRightRef}
                />
                <ServicesSeparator />
                <ServicesSection servicesRef={servicesRef} />
                <PortfolioSeparator />
                <PortfolioSection portfolioRef={portfolioRef} />
                <ContactSeparator />
                <ContactSection />

                {/* 3D Effects */}
                <Canvas
                    className="fixed inset-0 pointer-events-none z-0"
                    eventSource={mainRef}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                    }}
                >
                    <View track={overviewLeftRef}>
                        <CircuitLines count={8} color="hsl(var(--primary))" />
                        <ambientLight intensity={0.2} />
                    </View>
                    <View track={overviewRightRef}>
                        <RadarSweep radius={3} color="hsl(var(--secondary))" sweepSpeed={0.5} />
                        <ambientLight intensity={0.2} />
                    </View>
                    <View track={servicesRef}>
                        <CircuitLines count={30} color="hsl(var(--secondary))" />
                        <ambientLight intensity={0.2} />
                    </View>
                    <View track={portfolioRef}>
                        <RadarSweep radius={4} color="hsl(var(--accent))" sweepSpeed={0.3} />
                        <ambientLight intensity={0.2} />
                    </View>
                </Canvas>

                {/* Floating Chat Terminal */}
                <ErrorBoundary>
                    <ChatTerminal onCommand={handleCommand} />
                </ErrorBoundary>
            </main>
        </div>
    )
}
