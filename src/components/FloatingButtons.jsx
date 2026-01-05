import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import './FloatingButtons.css';

const FloatingButtons = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Social Media Icons */}
            <div className="floating-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                    <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                    <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                    <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                    <FaLinkedinIn />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
                    <FaYoutube />
                </a>
            </div>

            {/* WhatsApp Icon */}
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="floating-whatsapp">
                <FaWhatsapp />
            </a>

            {/* Scroll to Top Button */}
            <button onClick={scrollToTop} className={`scroll-to-top ${showScrollTop ? 'show' : ''}`}>
                <FaArrowUp />
            </button>
        </>
    );
};

export default FloatingButtons;