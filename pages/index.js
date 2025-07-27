import Head from "next/head";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { BsFillMoonStarsFill } from "react-icons/bs"
import { useState } from "react"
import deved from "../public/dev-ed-wave.png"
import code from "../public/code.png"
import design from "../public/design.png"
import consulting from "../public/consulting.png"
import Image from "next/image"
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"
import PortfolioIntro from "../components/PortfolioIntro";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import ContactSection from "../components/ContactSection";
import config from "../config";
import portfolioProjects from "../data/portfolio";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Yakubu T. Umar - Full Stack Developer & Entrepreneur</title>
                <meta name="description" content="Full Stack developer who uses code to provide services for business needs. Specializing in React, Next.js, Node, Express, Solidity, and EVM." />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="Full Stack Developer, React, Next.js, Node, Express, Solidity, EVM, Web3, Blockchain, Entrepreneur" />
                <meta name="author" content="Yakubu T. Umar" />
                <meta property="og:title" content="Yakubu T. Umar - Full Stack Developer & Entrepreneur" />
                <meta property="og:description" content="Full Stack developer who uses code to provide services for business needs. Specializing in React, Next.js, Node, Express, Solidity, and EVM." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://some19ice.github.io/some19ice-portfolio" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Yakubu T. Umar - Full Stack Developer & Entrepreneur" />
                <meta name="twitter:description" content="Full Stack developer who uses code to provide services for business needs. Specializing in React, Next.js, Node, Express, Solidity, and EVM." />
            </Head>
            <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
                {/* Navigation */}
                <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <h1 className="font-burtons text-2xl text-gray-900 dark:text-white">
                                some19ice
                            </h1>
                            <div className="flex items-center space-x-6">
                                <button
                                    onClick={() => setDarkMode(!darkMode)}
                                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                >
                                    <BsFillMoonStarsFill className="text-lg" />
                                </button>
                                <a
                                    href={config.resumeUrl}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                                >
                                    Resume
                                </a>
                                <a
                                    href={config.fundMeUrl}
                                    className="px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-medium hover:from-teal-600 hover:to-cyan-600 transition-all transform hover:scale-105"
                                >
                                    Fund Me
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="min-h-screen flex items-center justify-center pt-20 px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Content */}
                            <div className="text-center lg:text-left">
                                <div className="mb-6">
                                    <span className="inline-block px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full text-sm font-medium mb-4">
                                        👋 Hello, I&apos;m
                                    </span>
                                </div>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                                    <span className="block">Yakubu T.</span>
                                    <span className="block bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                                        Umar
                                    </span>
                                </h1>
                                <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-light">
                                    Full Stack Developer & Entrepreneur
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                    I craft digital experiences that bridge the gap between innovative ideas and functional reality. 
                                    Specializing in Web2 & Web3 technologies.
                                </p>
                                
                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                                    <a
                                        href="mailto:some19ice@example.com"
                                        className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-medium hover:from-teal-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg"
                                    >
                                        Let&apos;s Work Together
                                    </a>
                                    <a
                                        href="#portfolio"
                                        className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-teal-500 hover:text-teal-500 transition-all"
                                    >
                                        View My Work
                                    </a>
                                </div>

                                {/* Social Links */}
                                <div className="flex justify-center lg:justify-start space-x-6">
                                    <a 
                                        href={config.socialMedia.twitter}
                                        className="text-gray-400 hover:text-teal-500 transition-colors transform hover:scale-110"
                                    >
                                        <AiFillTwitterCircle className="text-2xl" />
                                    </a>
                                    <a 
                                        href={config.socialMedia.linkedin}
                                        className="text-gray-400 hover:text-teal-500 transition-colors transform hover:scale-110"
                                    >
                                        <AiFillLinkedin className="text-2xl" />
                                    </a>
                                    <a 
                                        href={config.socialMedia.github}
                                        className="text-gray-400 hover:text-teal-500 transition-colors transform hover:scale-110"
                                    >
                                        <AiFillGithub className="text-2xl" />
                                    </a>
                                </div>
                            </div>
                            
                            {/* Image */}
                            <div className="flex justify-center lg:justify-end">
                                <div className="relative">
                                    <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500 p-1">
                                        <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                                            <Image 
                                                src={deved} 
                                                fill 
                                                style={{objectFit: 'cover'}} 
                                                alt="Yakubu T. Umar - Full Stack Developer"
                                                className="rounded-full"
                                            />
                                        </div>
                                    </div>
                                    {/* Floating elements */}
                                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-bounce">
                                        ⚡
                                    </div>
                                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center text-xl animate-pulse">
                                        💻
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Services Section */}
                <section className="py-20 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                What I Do
                            </h2>
                            <PortfolioIntro />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <ServiceCard 
                                image={design}
                                title="Beautiful Designs"
                                description="Creating elegant designs suited for your needs following core design theory."
                                toolsTitle="Design Tools I Use"
                                tools={["Photoshop", "Illustrator", "Figma", "Blender"]}
                            />
                            <ServiceCard 
                                image={code}
                                title="Code your dream project"
                                description="Do you have an idea for your next great website? Let&apos;s make it a reality."
                                toolsTitle="Programming Language & Frameworks"
                                tools={["React / Next", "Node / Express", "Solidity / EVM"]}
                            />
                            <ServiceCard 
                                image={consulting}
                                title="Consulting"
                                description="Are you interested in feedback for your current project? I can give you tips and tricks to level it up."
                                toolsTitle="Tools I Use"
                                tools={["Word", "Excel", "Power Point", "Notion"]}
                            />
                        </div>
                    </div>
                </section>
                
                {/* Portfolio Section */}
                <section id="portfolio" className="py-20 px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                Featured Projects
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                Here are some of the projects I&apos;ve worked on recently. Each project represents a unique challenge and solution crafted with precision and creativity.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {portfolioProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                </section>
                
                <ContactSection />
            </main>
        </div>
    )
}
