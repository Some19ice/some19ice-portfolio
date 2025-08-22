import React, { useState, useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import ThemeShowcase from "@/components/ThemeShowcase"

export default function ThemeDemo() {
    const [darkMode, setDarkMode] = useState(false)

    // Persist theme preference
    useEffect(() => {
        const stored = typeof window !== "undefined" ? localStorage.getItem("darkMode") : null
        if (stored !== null) {
            setDarkMode(stored === "true")
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
                <title>Enhanced Light Theme Demo - Portfolio</title>
                <meta
                    name="description"
                    content="Showcase of the enhanced light theme with improved colors, contrast, and visual hierarchy."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen bg-background transition-colors duration-300">
                {/* Theme Toggle Header */}
                <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-xl font-bold text-foreground">Theme Demo</h1>
                                <p className="text-sm text-muted-foreground">
                                    Enhanced Light Theme Showcase
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setDarkMode(!darkMode)}
                                    className="px-4 py-2 rounded-lg bg-card hover:bg-secondary transition-colors border border-border text-card-foreground hover:text-foreground"
                                >
                                    {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                                </button>
                                <Link
                                    href="/"
                                    className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                                >
                                    ← Back to Portfolio
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Theme Showcase Content */}
                <ThemeShowcase />

                {/* Footer */}
                <footer className="border-t border-border bg-card/50 py-8">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <p className="text-muted-foreground">
                            Enhanced Light Theme - Designed for better accessibility and visual
                            appeal
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}
