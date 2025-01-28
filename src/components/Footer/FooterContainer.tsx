'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Link as NavLink, navigationLinks, socialLinks } from '@/config/nav';
import Wave from "@/components/Wave/Wave";



export default function FooterContainer() {
    const pathname = usePathname();
    const currentYear = new Date().getFullYear();
    const [showScrollButton, setShowScrollButton] = useState(false);

    const isActivePath = (path: string) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname.startsWith(path)) return true;
        return false;
    };

    useEffect(() => {
        const handleScroll = () => {
            // Show button when user scrolls down 200px (you can adjust this value)
            const shouldShow = window.scrollY > 200;
            setShowScrollButton(shouldShow);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full bg-orange-50 py-20 relative overflow-hidden">
            <div className="absolute top-[-10px]" data-negative="false">
                <Wave rotate={false}/>
            </div>
            <div className="container mx-auto px-4">
                {/* Desktop Layout */}
                <div className="hidden md:flex justify-between">
                    {/* Social Links Column */}
                    <div className="space-y-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                className="flex items-center text-xl font-headers space-x-2 text-orange-500 hover:text-orange-600"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className={`${link.icon} w-6`}></i>
                                <span>{link.name}</span>
                            </a>
                        ))}
                    </div>

                    {/* Navigation Links Column */}
                    <div className="flex flex-col space-y-2">
                        <h3 className="text-orange-500 font-bold mb-2">Brainy Bunnies</h3>
                        {navigationLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                className="text-orange-500 hover:text-orange-600 font-headers font-light"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex flex-col items-center space-y-6">
                    {socialLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className="flex items-center space-x-2 text-orange-500"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className={`${link.icon} w-6`}></i>
                            <span>{link.name}</span>
                        </a>
                    ))}
                </div>

                {/* Copyright - Both Layouts */}
                <div className="text-center mt-8 text-orange-500">
                    Brainy Bunnies © All Rights Reserved - {currentYear}
                </div>

                {/* Scroll to Top Button */}
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-4 right-4 bg-orange-300 text-white rounded-full p-3 hover:bg-orange-400 
transition-all duration-300 ease-in-out transform hover:scale-110
${showScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    aria-label="Scroll to top"
                >
                    <i className="fas fa-arrow-up"></i>
                </button>
            </div>
        </footer>
    );
}