import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { AiFillGithub } from "react-icons/ai"
import { BsFillMoonStarsFill } from "react-icons/bs"
import config from "../config"

const NavLink = ({ href, icon, label, active, highlight = false, onClick = undefined }) => {
    const isHash = href.startsWith("#")
    const className = highlight
        ? "flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-primary text-primary-foreground hover:bg-primary/90"
        : `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 ${active
            ? "text-primary bg-primary/10 border border-primary/20"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        }`

    if (isHash) {
        return (
            <a
                href={href}
                className={className}
                aria-label={`${label}${active ? " (current page)" : ""}`}
                aria-current={active ? "page" : undefined}
                role="menuitem"
                onClick={(e) => {
                    e.preventDefault()
                    const element = document.querySelector(href)
                    element?.scrollIntoView({ behavior: "smooth" })
                    if (onClick) onClick()
                }}
            >
                {icon}
                {label}
            </a>
        )
    }
    return (
        <Link
            href={href}
            className={className}
            aria-label={`${label}${active ? " (current page)" : ""}`}
            aria-current={active ? "page" : undefined}
            role="menuitem"
            onClick={onClick}
        >
            {icon}
            {label}
        </Link>
    )
}

const navItems = [
    {
        href: "#overview",
        label: "Dashboard",
        icon: (
            <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
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
        ),
    },
    {
        href: "#services",
        label: "Services",
        icon: (
            <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
            </svg>
        ),
    },
    {
        href: "#portfolio",
        label: "Projects",
        icon: (
            <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
            </svg>
        ),
    },
    {
        href: "/blog",
        label: "Blog",
        icon: (
            <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
            </svg>
        ),
    },
    {
        href: "#contact",
        label: "Contact",
        icon: (
            <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            </svg>
        ),
    },
    {
        href: "/hire",
        label: "Hire Me",
        icon: (
            <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            </svg>
        ),
        highlight: true,
    },
]

// Section IDs that correspond to hash nav items (for scroll-spy)
const sectionIds = ["overview", "services", "portfolio", "contact"]

export default function Navigation({ darkMode, setDarkMode }) {
    const router = useRouter()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("overview")
    const [isMac, setIsMac] = useState(false)

    // Detect platform for keyboard shortcut display
    useEffect(() => {
        if (typeof navigator !== "undefined") {
            setIsMac(navigator.platform?.toUpperCase().includes("MAC") || navigator.userAgent?.includes("Mac"))
        }
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false)
    }, [router.asPath])

    // Scroll-spy: observe which section is in view
    useEffect(() => {
        if (router.pathname !== "/") return

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, {
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0,
        })

        sectionIds.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [router.pathname])

    // Determine if a nav item is active
    const isActive = useCallback(
        (item) => {
            if (item.href.startsWith("#")) {
                return router.pathname === "/" && activeSection === item.href.slice(1)
            }
            return router.pathname === item.href
        },
        [router.pathname, activeSection]
    )

    const closeMobileMenu = useCallback(() => {
        setMobileMenuOpen(false)
    }, [])

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50"
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Brand */}
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

                        <div className="hidden lg:block w-px h-6 bg-border/50" />

                        {/* Desktop Navigation */}
                        <div
                            className="hidden md:flex items-center space-x-6 text-sm"
                            role="menubar"
                        >
                            {navItems.map((item) => (
                                <NavLink key={item.href} {...item} active={isActive(item)} />
                            ))}
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center space-x-4">
                        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-secondary/10 rounded-lg border border-secondary/20">
                            <div
                                className="w-2 h-2 bg-secondary rounded-full animate-pulse"
                                aria-hidden="true"
                            />
                            <span className="text-xs text-secondary font-medium">Available</span>
                        </div>

                        {/* Command Palette Trigger */}
                        <button
                            onClick={() => {
                                const event = new KeyboardEvent('keydown', {
                                    key: 'k',
                                    metaKey: true,
                                    bubbles: true
                                });
                                window.dispatchEvent(event);
                            }}
                            className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-card/50 rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
                            aria-label="Open command palette"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span className="text-xs">Search</span>
                            <kbd className="ml-1 px-1.5 py-0.5 text-[10px] bg-muted/50 rounded border border-border/50">
                                {isMac ? "⌘" : "Ctrl+"}K
                            </kbd>
                        </button>

                        <div className="hidden lg:block w-px h-6 bg-border/50" />

                        <div className="flex items-center space-x-2">
                            <a
                                href={config.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-card/50 hover:bg-card transition-colors border border-border/50 text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
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
                                className="p-2 rounded-lg bg-card/50 hover:bg-card transition-colors border border-border/50 text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                                aria-label="GitHub profile"
                            >
                                <AiFillGithub className="w-4 h-4" />
                            </a>
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                aria-label="Toggle dark mode"
                                aria-pressed={darkMode}
                                className="p-2 rounded-lg bg-card/50 hover:bg-card transition-colors border border-border/50 text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
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

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 rounded-lg bg-card/50 hover:bg-card transition-colors border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            aria-label="Toggle mobile menu"
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-menu"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
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
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
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
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div
                        id="mobile-menu"
                        className="md:hidden border-t border-border/50 py-4 animate-in slide-in-from-top-2 duration-200"
                        role="menu"
                    >
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.href}
                                    {...item}
                                    active={isActive(item)}
                                    onClick={closeMobileMenu}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
