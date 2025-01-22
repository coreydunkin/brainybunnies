'use client';

import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { Link as NavLink, navigationLinks, socialLinks } from '@/config/nav';



export default function FooterContainer() {
    const pathname = usePathname();
    const currentYear = new Date().getFullYear();

    const isActivePath = (path: string) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <footer className="w-full bg-orange-50 py-20 relative">

            <div className="absolute top-[-10px]" data-negative="false">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6480 68" preserveAspectRatio="none" height={52}
                     className="w-auto">
                    <path className="elementor-shape-fill" d="M3599.8,0h-1920v68c0,0,70.8-38,120-38s70.8,38,120,38s70.8-38,120-38c49.2,0,70.8,38,120,38s70.8-38,120-38s70.8,38,120,38
	s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38
	s70.8-38,120-38s120,38,120,38V0z" fill="#fff"></path>
                    <path className="elementor-shape-fill" d="M3599.8,0h-1920v68c0,0,70.8-38,120-38s70.8,38,120,38s70.8-38,120-38c49.2,0,70.8,38,120,38s70.8-38,120-38s70.8,38,120,38
	s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38
	s70.8-38,120-38s120,38,120,38V0z" fill="#fff"></path>
                    <path className="elementor-shape-fill" d="M5280.3,0h-1920v68c0,0,70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38
	c49.2,0,70.8-38,120-38c49.2,0,70.8,38,120,38c49.2,0,70.8-38,120-38c49.2,0,70.8,38,120,38c49.2,0,70.8-38,120-38
	c49.2,0,70.8,38,120,38c49.2,0,70.8-38,120-38c49.2,0,70.8,38,120,38c49.2,0,70.8-38,120-38c49.2,0,120,38,120,38V0z"
                          fill="#fff"></path>
                    <path className="elementor-shape-fill" d="M6480.3-0.4h-1920v68c0,0,70.8-38,120-38c49.2,0,70.8,38,120,38c49.2,0,70.8-38,120-38c49.2,0,70.8,38,120,38
	c49.2,0,70.8-38,120-38c49.2,0,70.8,38,120,38c49.2,0,70.8-38,120-38c49.2,0,70.8,38,120,38c49.2,0,70.8-38,120-38
	c49.2,0,70.8,38,120,38s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s120,38,120,38V-0.4z"
                          fill="#fff"></path>
                    <path className="elementor-shape-fill" d="M1920,0H0v68c0,0,70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38
	s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38
	s70.8-38,120-38s120,38,120,38V0z" fill="#fff"></path>
                </svg>
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
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                    className="fixed bottom-4 right-4 bg-orange-300 text-white rounded-full p-3 hover:bg-orange-400 transition-colors"
                    aria-label="Scroll to top"
                >
                    <i className="fas fa-arrow-up"></i>
                </button>
            </div>
        </footer>
    );
}