'use client';

import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { Link as NavLink, navigationLinks, socialLinks } from '@/config/nav';
import Wave from "@/components/Wave/Wave";



export default function HeaderContainer() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActivePath = (path: string) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname.startsWith(path)) return true;
        return false;
    };
    return (
        <>
            <header className="w-full static">
                {/* Top social links bar - hidden on mobile */}
                <div className="hidden md:block bg-orange-50">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-start space-x-6 py-2">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    className="text-orange-500 hover:text-orange-600"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i aria-hidden="true" className={`${link.icon} mr-2`}/>
                                    <span>{link.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <Wave rotate={true}/>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-orange-500 z-50 md:hidden">
                        <div className="container mx-auto px-4 py-4">
                            <div className="flex justify-between items-center">
                                <Link href="/">
                                    <div className="w-48">
                                        <Image
                                            width={500}
                                            height={232}
                                            src="/logo.png"
                                            alt="Brainy Bunnies Logo"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </Link>
                                <button
                                    className="text-white"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-10">
                                {navigationLinks.map((link) => (
                                    <Link
                                        key={link.id}
                                        href={link.href}
                                        className="block text-white border-b-orange-400 border-b-2 text-2xl py-4 pl-4 font-headers"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Main navigation */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4 ">
                        {/* Logo */}
                        <Link href="/">
                            <div className="w-48">
                                <Image
                                    width={500}
                                    height={232}
                                    src="/logo.png"
                                    alt="Brainy Bunnies Logo"
                                    className="w-full h-auto"
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation - hidden on mobile */}
                        <div className="hidden md:flex space-x-7">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    className={`font-headers text-orange-400 text-sm hover:text-orange-600 hover:font-bold uppercase 
                                        ${isActivePath(link.href) ? 'font-bold text-orange-600' : 'font-normal'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-orange-500"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {!isMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}