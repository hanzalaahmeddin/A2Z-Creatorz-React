import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logoDark from "../assets/images/a2zcreatorz-logo.png";
import logoWhite from "../assets/images/a2z-logo-white.png";

import { FiMail, FiPhone, FiMenu, FiX, FiGlobe, FiSmartphone, FiTrendingUp } from "react-icons/fi";
import { BsArrowDownShort } from "react-icons/bs";
import "../assets/css/header.css";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`dg-header ${scrolled ? "scrolled" : ""}`}>
            <div className="dg-inner">

                {/* LOGO */}
                <Link to="/" className="dg-logo">
                    <img
                        src={scrolled ? logoWhite : logoDark}
                        alt="A2Z Creatorz"
                    />
                </Link>

                {/* MENU */}
                <nav className={`dg-nav ${menuOpen ? "open" : ""}`}>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>About Us</NavLink>
                    <div
                        className="dg-nav-item"
                        onMouseEnter={() => setShowMegaMenu(true)}
                        onMouseLeave={() => setShowMegaMenu(false)}
                        onClick={() => setShowMegaMenu(!showMegaMenu)}
                    >
                        <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""} onClick={(e) => { e.preventDefault(); setMenuOpen(false); }}>Services <BsArrowDownShort /></NavLink>
                        <div className={`mega-menu ${showMegaMenu ? 'show' : ''}`}>
                            <div className="mega-menu-inner">
                                <Link to="/services/website-development" onClick={() => setMenuOpen(false)}><FiGlobe /> Website Development</Link>
                                <Link to="/services/mobile-applications" onClick={() => setMenuOpen(false)}><FiSmartphone /> Mobile Applications</Link>
                                <Link to="/services/digital-marketing" onClick={() => setMenuOpen(false)}><FiTrendingUp /> Digital Marketing</Link>
                            </div>
                        </div>
                    </div>
                    <NavLink to="/industry" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>Industry</NavLink>
                    <NavLink to="/work" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>Our Work</NavLink>

                    <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>Blog</NavLink>
                </nav>

                {/* HAMBURGER */}
                <button className="dg-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* ACTIONS */}
                <div className="dg-actions">

                    <a href="mailto:info@a2zcreatorz.com" className="dg-icon">
                        <FiMail />
                    </a>

                    <a href="tel:+923000000000" className="dg-icon">
                        <FiPhone />
                    </a>


                    <Link to="/contact" className="dg-btn">
                        Speak to an expert
                    </Link>

                </div>

            </div>
        </header>
    );
}

export default Header;
