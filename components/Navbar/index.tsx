// "use client"

// import { useState } from 'react';


// import Link from 'next/link';
// import { usePathname } from 'next/navigation'

// import {
//     MenuIcon,
//     XIcon,
//     DownloadIcon
// } from 'lucide-react';



// const Navbar = () => {

//     const pathname = usePathname();

//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const isHomeActive = pathname == '/' ? true : false;
//     const isAboutActive = pathname == '/about' ? true : false;

//     return (
//         <>
//             {/* Top bar */}
//             <div className='bg-lime-400 h-4 w-full'></div>

//             {/* Navbar */}
//             <nav className="bg-background border-b border-gray-700 animate__animated animate__fadeInDown">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
//                     <div className="flex justify-between h-16">

//                         <div className="flex">
//                             <div className="flex-shrink-0 flex items-center">
//                                 <Link href="/" className="text-white text-2xl font-bold">
//                                     Waqas <span className='text-lime-400'>Khan</span>
//                                 </Link>
//                             </div>
//                         </div>

//                         <div className="flex items-center">
//                             <div className="hidden md:block">
//                                 <div className="flex items-baseline space-x-4">

//                                     <Link href="/" className={isHomeActive ? "active [&.active]:bg-lime-400 [&.active]:text-background text-white transition-all duration-300 px-3 py-2 rounded-md text-lg font-bold cursor-pointer" : "text-white transition-all duration-300 hover:bg-lime-400 hover:text-background px-3 py-2 rounded-md text-lg font-bold cursor-pointer"}>
//                                         Home
//                                     </Link>

//                                     <Link href="/about" className={isAboutActive ? "active [&.active]:bg-lime-400 [&.active]:text-background text-white transition-all duration-300 px-3 py-2 rounded-md text-lg font-bold cursor-pointer" : "text-white transition-all duration-300 hover:bg-lime-400 hover:text-background px-3 py-2 rounded-md text-lg font-bold cursor-pointer"}>
//                                         About
//                                     </Link>

//                                     <Link href="/Isfhan-Resume-2023.pdf" target={'_blank'} className="flex items-center gap-2 text-white transition-all duration-300 hover:bg-lime-400 hover:text-background px-3 py-2 rounded-md text-lg font-bold cursor-pointer">
//                                         Resume <DownloadIcon className="h-4 w-4" />
//                                     </Link>

//                                 </div>
//                             </div>

//                             <div className="md:hidden">
//                                 <button
//                                     onClick={toggleMenu}
//                                     className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
//                                 >
//                                     {isOpen ? (
//                                         <XIcon className="h-6 w-6" />
//                                     ) : (
//                                         <MenuIcon className="h-6 w-6" />
//                                     )}
//                                 </button>
//                             </div>

//                         </div>

//                     </div>

//                 </div>

//                 {isOpen && (
//                     <div className="md:hidden">
//                         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

//                             <Link href="/" className="text-white transition-all duration-300 hover:bg-lime-400 hover:text-background block px-3 py-2 rounded-md text-base font-bold">
//                                 Home
//                             </Link>

//                             <Link href="/about" className="text-white transition-all duration-300 hover:bg-lime-400 hover:text-background block px-3 py-2 rounded-md text-base font-bold">
//                                 About
//                             </Link>

//                             <Link href="/contact" className="text-white transition-all duration-300 hover:bg-lime-400 hover:text-background block px-3 py-2 rounded-md text-base font-bold">
//                                 Resume <DownloadIcon className="h-4 w-4 inline-block" />
//                             </Link>

//                         </div>
//                     </div>
//                 )}
//             </nav>
//         </>
//     );
// };

// export default Navbar;





"use client";  // ✅ Add this at the top

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
                    <Link href="/Isfhan-Resume-2023.pdf" target="_blank" className="flex items-center gap-2 text-white hover:text-lime-400">
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
