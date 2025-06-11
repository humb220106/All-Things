import React, { useState } from "react";
import logo from "../assets/logo.png";
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { label: "Home", path: "home" },
        { label: "Our Menu", path: "feature" },
        { label: "About", path: "about" },
        { label: "Our Plans", path: "pricing" },
    ];

    return (
        <>
            <nav className="bg-white md:px-14 p-4 max-w-screen-2x1 border-b mx-auto text-primary fixed top-0 right-0 left-0">
                <div className="text-lg container mx-auto flex justify-between items-center font-medium">
                    <div className="flex space-x-14 items-center">
                        <a href="/" className="text-2xl font-semibold flex items-center space-x-3 text-primary">
                            <img src={logo} alt="" className="w-10 inline-block items-center" /><span>ALL THINGS</span>
                        </a>

                        <ul className="md:flex space-x-12 hidden">
                            {navItems.map(({ label, path }) => (
                                <li key={label}>
                                    <Link to={path} className="block hover:text-gray-300 cursor-pointer">{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-gray-300">
                            {isMenuOpen ? <FaTimes className="w-6 h-6 text-primary" /> : <FaBars className="w-6 h-6 text-primary" />}
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
            {navItems.map(({ label, path }) => (
    <div key={label}>
        <Link
            to={path}
            spy={true}
            smooth={true}
            offset={-100}
            className="block hover:text-gray-300"
            onClick={toggleMenu}
        >
            {label}
        </Link>
    </div>
))}
            </div>
        </>
    );
};

export default Navbar;
