import { AiFillMail, AiFillPhone, AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsGeoAlt } from "react-icons/bs";
import config from "../config";

const ContactSection = () => {
    return (
        <section className="py-20 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Let&apos;s Work Together
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        I&apos;m always interested in hearing about new opportunities and projects. 
                        Whether you have a question or just want to say hi, feel free to reach out!
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                        Contact Information
                    </h4>
                    
                    <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                        <div className="bg-teal-100 dark:bg-teal-900 p-3 rounded-full">
                            <AiFillMail className="text-teal-600 dark:text-teal-400 text-xl" />
                        </div>
                        <div>
                            <p className="font-medium">Email</p>
                            <a href="mailto:some19ice@example.com" className="text-teal-600 hover:text-teal-700">
                                some19ice@example.com
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                        <div className="bg-teal-100 dark:bg-teal-900 p-3 rounded-full">
                            <BsGeoAlt className="text-teal-600 dark:text-teal-400 text-xl" />
                        </div>
                        <div>
                            <p className="font-medium">Location</p>
                            <p>Remote / Available Worldwide</p>
                        </div>
                    </div>
                    
                    {/* Social Links */}
                    <div className="pt-6">
                        <h5 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                            Follow Me
                        </h5>
                        <div className="flex space-x-4">
                            <a 
                                href={config.socialMedia.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors"
                            >
                                <AiFillTwitterCircle className="text-gray-600 dark:text-gray-400 hover:text-teal-600 text-xl" />
                            </a>
                            <a 
                                href={config.socialMedia.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors"
                            >
                                <AiFillLinkedin className="text-gray-600 dark:text-gray-400 hover:text-teal-600 text-xl" />
                            </a>
                            <a 
                                href={config.socialMedia.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors"
                            >
                                <AiFillGithub className="text-gray-600 dark:text-gray-400 hover:text-teal-600 text-xl" />
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Quick Action */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                        Let&apos;s Work Together
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Ready to start your project? Get in touch and let&apos;s discuss how we can bring your ideas to life.
                    </p>
                    <div className="space-y-4">
                        <a 
                            href="mailto:some19ice@example.com?subject=Project Inquiry"
                            className="block w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-md text-center font-medium hover:from-cyan-600 hover:to-teal-600 transition-colors"
                        >
                            Send Email
                        </a>
                        <a 
                            href={config.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full border-2 border-teal-500 text-teal-500 px-6 py-3 rounded-md text-center font-medium hover:bg-teal-500 hover:text-white transition-colors"
                        >
                            View Resume
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default ContactSection;
