import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import useDarkMode from "../lib/useDarkMode"
import { BsFillMoonStarsFill } from "react-icons/bs"
import { AiFillGithub, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai"
import config from "../config"

const packages = [
    {
        id: "gis-dashboard",
        name: "GIS Dashboard",
        tagline: "Custom mapping solutions",
        price: "$3,000",
        priceNote: "starting from",
        timeline: "2-4 weeks",
        description: "Interactive geospatial dashboards with real-time data visualization, custom map layers, and analytics.",
        features: [
            "Custom MapLibre/Mapbox integration",
            "Real-time data overlays",
            "PostGIS backend setup",
            "OGC WMS/WFS standards",
            "Mobile-responsive design",
            "1 month support included"
        ],
        highlight: false,
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        id: "full-stack-mvp",
        name: "Full Stack MVP",
        tagline: "Launch your product",
        price: "$6,000",
        priceNote: "starting from",
        timeline: "4-8 weeks",
        description: "Complete web application with modern tech stack, authentication, database, and deployment.",
        features: [
            "Next.js 15 + React 19",
            "PostgreSQL + Drizzle ORM",
            "Authentication (Clerk/Auth.js)",
            "Role-based access control",
            "Stripe payment integration",
            "Vercel/AWS deployment",
            "Admin dashboard",
            "3 months support included"
        ],
        highlight: true,
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        id: "monthly-retainer",
        name: "Monthly Retainer",
        tagline: "Ongoing partnership",
        price: "$1,500",
        priceNote: "per month",
        timeline: "Ongoing",
        description: "Dedicated development hours each month for maintenance, features, and technical consulting.",
        features: [
            "20 hours/month guaranteed",
            "Priority response (< 24h)",
            "Bug fixes & maintenance",
            "Feature development",
            "Technical consulting",
            "Architecture reviews",
            "Cancel anytime"
        ],
        highlight: false,
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    }
]

const testimonials = [
    {
        quote: "The inventory system transformed how we operate. We went from paper logs to real-time tracking, and our revenue grew 400% in under a year.",
        author: "Fuel Station Owner",
        role: "Station Stock Manager Client",
        metric: "₦15M → ₦100M capital growth"
    },
    {
        quote: "Yakubu delivered a national-scale geospatial portal that now serves 50+ government agencies. His technical depth in GIS is exceptional.",
        author: "Project Stakeholder",
        role: "NGDI Metadata Portal",
        metric: "50+ agencies onboarded"
    }
]

const faqs = [
    {
        q: "What's your tech stack?",
        a: "I specialize in Next.js, React, TypeScript, Python, PostgreSQL/PostGIS, and GIS tools like Mapbox, MapLibre, and QGIS. For AI projects, I work with LangChain, OpenAI, and Google Earth Engine."
    },
    {
        q: "Do you work with international clients?",
        a: "Yes! I work with clients worldwide. I'm based in Nigeria (WAT/UTC+1) and am flexible with meeting times. All communication is in English."
    },
    {
        q: "What's your payment process?",
        a: "Typically 50% upfront, 50% on completion for projects. Retainers are billed monthly in advance. I accept bank transfer, Wise, and cryptocurrency."
    },
    {
        q: "Can you work with my existing team?",
        a: "Absolutely. I can integrate with your existing development workflow, participate in standups, and collaborate via GitHub/GitLab."
    }
]

export default function HirePage() {
    const { darkMode, setDarkMode, mounted } = useDarkMode()
    const [openFaq, setOpenFaq] = useState(null)

    if (!mounted) return null

    return (
        <div className="min-h-screen bg-background transition-colors duration-300">
            <Head>
                <title>Hire Me - Yakubu T. Umar | Full Stack & GIS Developer</title>
                <meta name="description" content="Hire Yakubu T. Umar for GIS dashboards, full stack development, and technical consulting. Specializing in Next.js, React, and geospatial solutions." />
                <meta property="og:title" content="Hire Yakubu T. Umar - Full Stack & GIS Developer" />
                <meta property="og:description" content="Custom GIS dashboards, full stack MVPs, and ongoing development retainers. Let's build something great together." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://some19ice.vercel.app/hire" />
                <meta property="og:image" content="https://some19ice.vercel.app/og-image.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hire Yakubu T. Umar - Full Stack & GIS Developer" />
                <meta name="twitter:description" content="Custom GIS dashboards, full stack MVPs, and ongoing development retainers. Let's build something great together." />
                <meta name="twitter:image" content="https://some19ice.vercel.app/og-image.png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">YU</span>
                            </div>
                            <span className="font-burtons text-xl text-foreground group-hover:text-primary transition-colors">
                                some19ice
                            </span>
                        </Link>

                        <div className="flex items-center space-x-4">
                            <Link
                                href="/"
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                ← Back to Portfolio
                            </Link>
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="p-2 rounded-lg bg-card/50 hover:bg-card transition-colors border border-border/50"
                                aria-label="Toggle dark mode"
                            >
                                {darkMode ? (
                                    <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ) : (
                                    <BsFillMoonStarsFill className="w-4 h-4 text-muted-foreground" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="pt-24 pb-16">
                {/* Hero */}
                <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/10 rounded-full border border-secondary/20 mb-6">
                            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                            <span className="text-sm text-secondary font-medium">Available for new projects</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                            Let's Build Something{" "}
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                Great Together
                            </span>
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                            7+ years building geospatial systems, full-stack applications, and enterprise software.
                            From national-scale data portals to inventory systems that drive 400% revenue growth.
                        </p>

                        <a
                            href="https://calendly.com/some19ice/discovery"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Book a Discovery Call
                        </a>
                    </div>
                </section>

                {/* Packages */}
                <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Service Packages</h2>
                        <p className="text-muted-foreground">Choose a package or let's discuss a custom solution</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {packages.map((pkg) => (
                            <div
                                key={pkg.id}
                                className={`relative p-6 rounded-2xl border transition-all hover:scale-[1.02] ${pkg.highlight
                                    ? "bg-gradient-to-b from-primary/10 to-card border-primary/30 shadow-lg shadow-primary/10"
                                    : "bg-card border-border/50"
                                    }`}
                            >
                                {pkg.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                                        Most Popular
                                    </div>
                                )}

                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${pkg.highlight ? "bg-primary/20 text-primary" : "bg-muted/30 text-muted-foreground"
                                    }`}>
                                    {pkg.icon}
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{pkg.tagline}</p>

                                <div className="mb-4">
                                    <span className="text-3xl font-bold text-foreground">{pkg.price}</span>
                                    <span className="text-sm text-muted-foreground ml-1">{pkg.priceNote}</span>
                                </div>

                                <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>

                                <div className="text-xs text-muted-foreground mb-4">
                                    <span className="font-medium">Timeline:</span> {pkg.timeline}
                                </div>

                                <ul className="space-y-2 mb-6">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <svg className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-foreground/80">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={`mailto:${config.contactEmail}?subject=Inquiry: ${pkg.name}`}
                                    className={`block w-full text-center py-2.5 rounded-lg font-medium transition-colors ${pkg.highlight
                                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                        : "bg-muted/50 text-foreground hover:bg-muted"
                                        }`}
                                >
                                    Get Started
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials */}
                <section className="max-w-5xl mx-auto px-6 lg:px-8 mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Client Results</h2>
                        <p className="text-muted-foreground">Real impact from real projects</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {testimonials.map((t, i) => (
                            <div key={i} className="p-6 bg-card rounded-2xl border border-border/50">
                                <div className="flex items-center gap-2 mb-4">
                                    {[...Array(5)].map((_, starIdx) => (
                                        <svg key={starIdx} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                <p className="text-foreground/90 mb-4 italic">"{t.quote}"</p>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-foreground">{t.author}</p>
                                        <p className="text-sm text-muted-foreground">{t.role}</p>
                                    </div>
                                    <div className="px-3 py-1.5 bg-secondary/10 rounded-lg">
                                        <span className="text-xs font-medium text-secondary">{t.metric}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="max-w-3xl mx-auto px-6 lg:px-8 mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-border/50 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-4 text-left bg-card hover:bg-card/80 transition-colors"
                                >
                                    <span className="font-medium text-foreground">{faq.q}</span>
                                    <svg
                                        className={`w-5 h-5 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {openFaq === i && (
                                    <div className="px-4 pb-4 text-muted-foreground">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-card to-secondary/10 rounded-2xl border border-border/50 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Start?</h2>
                        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                            Book a free 30-minute discovery call to discuss your project. No commitment required.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://calendly.com/some19ice/discovery"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Book Discovery Call
                            </a>

                            <a
                                href={`mailto:${config.contactEmail}`}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-card hover:bg-muted text-foreground font-medium rounded-lg border border-border/50 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Email Me
                            </a>
                        </div>

                        <div className="flex items-center justify-center gap-4 mt-8">
                            <a href={config.socialMedia.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub profile">
                                <AiFillGithub className="w-6 h-6" />
                            </a>
                            <a href={config.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn profile">
                                <AiOutlineLinkedin className="w-6 h-6" />
                            </a>
                            <a href={config.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter profile">
                                <AiOutlineTwitter className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-border/50 py-8">
                <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Yakubu T. Umar. All rights reserved.
                </div>
            </footer>
        </div>
    )
}
