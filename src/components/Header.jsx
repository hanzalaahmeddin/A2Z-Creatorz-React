import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logoDark from "../assets/images/a2zcreatorz-logo.png";
import logoWhite from "../assets/images/a2z-logo-white.png";

import { FiMenu, FiX, FiGlobe, FiSmartphone, FiTrendingUp, FiShoppingCart, FiLayout, FiUsers, FiShield, FiServer, FiLock, FiCloud, FiFileText, FiBriefcase, FiCode } from "react-icons/fi";
import { BsArrowDownShort } from "react-icons/bs";
import "../assets/css/header.css";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [showAboutMenu, setShowAboutMenu] = useState(false);
    const [showServicesMenu, setShowServicesMenu] = useState(false);
    const [showPortfolioMenu, setShowPortfolioMenu] = useState(false);
    const [showContactMenu, setShowContactMenu] = useState(false);
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
                    <div
                        className="dg-nav-item"
                        onMouseEnter={() => setShowAboutMenu(true)}
                        onMouseLeave={() => setShowAboutMenu(false)}
                        onClick={() => setShowAboutMenu(!showAboutMenu)}
                    >
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About Us <BsArrowDownShort /></NavLink>
                        <div className={`mega-menu ${showAboutMenu ? 'show' : ''}`}>
                            <div className="mega-menu-inner">
                                <a href="https://a2zcreatorz.com/wp-content/uploads/2025/01/A2Z-Creatorz-Profile-1.pdf" target="_blank" rel="noopener noreferrer"><FiFileText /> Company Profile</a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="dg-nav-item"
                        onMouseEnter={() => setShowServicesMenu(true)}
                        onMouseLeave={() => setShowServicesMenu(false)}
                        onClick={() => setShowServicesMenu(!showServicesMenu)}
                    >
                        <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services <BsArrowDownShort /></NavLink>
                        <div className={`mega-menu ${showServicesMenu ? 'show' : ''}`}>
                            <div className="mega-menu-inner">
                                <Link to="/services/web-design-development" onClick={() => setMenuOpen(false)}><FiGlobe /> Web Design & Development</Link>
                                <Link to="/services/mobile-application" onClick={() => setMenuOpen(false)}><FiSmartphone /> Mobile Application</Link>
                                <Link to="/services/ecommerce" onClick={() => setMenuOpen(false)}><FiShoppingCart /> Ecommerce</Link>
                                <Link to="/services/digital-marketing" onClick={() => setMenuOpen(false)}><FiTrendingUp /> Digital Marketing</Link>
                                <Link to="/services/ui-ux-design" onClick={() => setMenuOpen(false)}><FiLayout /> UI/UX Design</Link>
                                <Link to="/services/it-staff-outsourcing" onClick={() => setMenuOpen(false)}><FiUsers /> IT Staff Outsourcing</Link>
                                <Link to="/services/web-digital-security" onClick={() => setMenuOpen(false)}><FiShield /> Web & Digital Security</Link>
                                <Link to="/services/web-hosting" onClick={() => setMenuOpen(false)}><FiServer /> Web Hosting</Link>
                                <Link to="/services/bitdefender" onClick={() => setMenuOpen(false)}><FiLock /> Bitdefender</Link>
                                <Link to="/services/google-workspace-plans" onClick={() => setMenuOpen(false)}><FiCloud /> Google Work Space Plans</Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className="dg-nav-item"
                        onMouseEnter={() => setShowPortfolioMenu(true)}
                        onMouseLeave={() => setShowPortfolioMenu(false)}
                        onClick={() => setShowPortfolioMenu(!showPortfolioMenu)}
                    >
                        <NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : ""}>Portfolio <BsArrowDownShort /></NavLink>
                        <div className={`mega-menu ${showPortfolioMenu ? 'show' : ''}`}>
                            <div className="mega-menu-inner">
                                <Link to="/portfolio/website" onClick={() => setMenuOpen(false)}><FiGlobe /> Website</Link>
                                <Link to="/portfolio/ecommerce" onClick={() => setMenuOpen(false)}><FiShoppingCart /> Ecommerce</Link>
                                <Link to="/portfolio/mobile-application" onClick={() => setMenuOpen(false)}><FiSmartphone /> Mobile Application</Link>
                                <Link to="/portfolio/digital-marketing" onClick={() => setMenuOpen(false)}><FiTrendingUp /> Digital Marketing</Link>
                                <Link to="/portfolio/web-application" onClick={() => setMenuOpen(false)}><FiCode /> Web Application</Link>
                            </div>
                        </div>
                    </div>
                    <NavLink to="/news-events" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>News & Events</NavLink>
                    <NavLink to="/our-clients" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>Our Clients</NavLink>
                    <div
                        className="dg-nav-item"
                        onMouseEnter={() => setShowContactMenu(true)}
                        onMouseLeave={() => setShowContactMenu(false)}
                        onClick={() => setShowContactMenu(!showContactMenu)}
                    >
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact Us <BsArrowDownShort /></NavLink>
                        <div className={`mega-menu ${showContactMenu ? 'show' : ''}`}>
                            <div className="mega-menu-inner">
                                <Link to="/contact/careers" onClick={() => setMenuOpen(false)}><FiBriefcase /> Careers</Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* HAMBURGER */}
                <button className="dg-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* ACTIONS */}
                <div className="dg-actions">
                    <Link to="/contact" className="dg-btn">
                        Get a Quote
                    </Link>
                </div>

            </div>
        </header>
    );
}

export default Header;
