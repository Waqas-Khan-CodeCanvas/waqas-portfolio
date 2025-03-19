
"use client";  

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon, DownloadIcon, BriefcaseIcon, MailIcon } from "lucide-react";

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    Waqas <span className="text-lime-400">Khan</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6">
                    <NavItem href="/" active={pathname === "/"}>Home</NavItem>
                    <NavItem href="/about" active={pathname === "/about"}>About</NavItem>
                    <NavItem href="/projects" active={pathname === "/projects"}>
                        <BriefcaseIcon className="w-5 h-5 inline-block" /> Projects
                    </NavItem>
                    <NavItem href="/contact" active={pathname === "/contact"}>
                        <MailIcon className="w-5 h-5 inline-block" /> Contact
                    </NavItem>
                    <Link href="/Isfhan-Resume-2023.pdf" target="_blank" className="flex items-center gap-2 text-white hover:text-lime-400">
                        Resume <DownloadIcon className="w-4 h-4" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden">
                    {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-2 py-4 bg-gray-800">
                    <NavItem href="/" active={pathname === "/"}>Home</NavItem>
                    <NavItem href="/about" active={pathname === "/about"}>About</NavItem>
                    <NavItem href="/projects" active={pathname === "/projects"}>
                        <BriefcaseIcon className="w-5 h-5 inline-block" /> Projects
                    </NavItem>
                    <NavItem href="/contact" active={pathname === "/contact"}>
                        <MailIcon className="w-5 h-5 inline-block" /> Contact
                    </NavItem>
                    <Link href="/" target="_blank" className="flex items-center gap-2 text-white hover:text-lime-400">
                        Resume <DownloadIcon className="w-4 h-4" />
                    </Link>
                </div>
            )}
        </nav>
    );
};

interface NavItemProps {
    href: string;
    active: boolean;
    children: React.ReactNode;
}

const NavItem = ({ href, active, children }: NavItemProps) => (
    <Link href={href} className={`px-3 py-2 rounded-md text-lg font-bold transition-all ${active ? "bg-lime-400 text-gray-900" : "hover:bg-lime-400 hover:text-gray-900"}`}>
        {children}
    </Link>
);

export default Navbar;
