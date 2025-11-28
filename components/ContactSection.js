import { AiFillMail, AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { BsGeoAlt } from "react-icons/bs"
import config from "../config"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 px-6 lg:px-8 bg-muted/20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
                    <p className="text-muted-foreground max-w-2xl">
                        Ready to start your next project? Let&apos;s discuss how we can work
                        together to bring your ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Contact Methods */}
                    <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <AiFillMail className="text-primary text-lg" />
                                </div>
                                Email Me
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground text-sm">
                                Send me an email for project inquiries or general questions.
                            </p>
                            <div className="space-y-2">
                                <a
                                    href={`mailto:${config.contactEmail}?subject=Project Inquiry`}
                                    className="block w-full"
                                >
                                    <Button
                                        className="w-full bg-primary hover:bg-primary/90"
                                        size="sm"
                                    >
                                        Start a Project
                                    </Button>
                                </a>
                                <a
                                    href={`mailto:${config.contactEmail}?subject=General Inquiry`}
                                    className="block w-full"
                                >
                                    <Button variant="outline" className="w-full" size="sm">
                                        General Inquiry
                                    </Button>
                                </a>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Location & Availability */}
                    <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                                    <BsGeoAlt className="text-secondary text-lg" />
                                </div>
                                Location
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Based in</span>
                                    <span className="text-foreground">Nigeria</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Availability</span>
                                    <span className="text-foreground">Remote Worldwide</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Timezone</span>
                                    <span className="text-foreground">WAT (UTC+1)</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Status</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                        <span className="text-emerald-500 text-xs">Available</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Social Links */}
                    <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-5 h-5 text-accent"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>
                                Connect
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground text-sm">
                                Follow me on social media for updates and insights.
                            </p>
                            <div className="grid grid-cols-3 gap-2">
                                <a
                                    href={config.socialMedia.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors flex items-center justify-center"
                                    aria-label="GitHub profile"
                                >
                                    <AiFillGithub className="text-lg" />
                                </a>
                                <a
                                    href={config.socialMedia.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors flex items-center justify-center"
                                    aria-label="LinkedIn profile"
                                >
                                    <AiFillLinkedin className="text-lg" />
                                </a>
                                <a
                                    href={config.socialMedia.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors flex items-center justify-center"
                                    aria-label="Twitter profile"
                                >
                                    <AiFillTwitterCircle className="text-lg" />
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
