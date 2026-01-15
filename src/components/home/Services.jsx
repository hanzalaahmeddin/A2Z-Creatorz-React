import React, { useState } from 'react';
import { FaCode, FaMobileAlt, FaBullhorn, FaPalette, FaShieldAlt, FaUsers, FaServer } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import customWebDevImg from '../../assets/images/Custom-Web-Development.png';
import frontendWhiteImg from '../../assets/images/frontend-white.png';
import serviceBgImg from '../../assets/images/service-bg.webp';
import appBannerImg from '../../assets/images/App-Banner.png';
import mobileAppWhiteImg from '../../assets/images/mobile-appication-white.png';
import mobileAppBgImg from '../../assets/images/mobile-application-bg.webp';
import digitalMarketingImg from '../../assets/images/digital-marketing.webp';
import digitalMarketingIconImg from '../../assets/images/Digital-Marketing-icon.png';
import digitalMarketingBgImg from '../../assets/images/digital-marketing-bg.webp';
import webHostingImg from '../../assets/images/web-hosting.png';
import secureWebHostingImg from '../../assets/images/secure-webhosting.png';
import bitdefenderImg from '../../assets/images/Bitdefender-img.png';
import bitdefenderIconsImg from '../../assets/images/bitdefender-icons.png';
import itStaffAugImg from '../../assets/images/IT-Staff-Augmentation.png';
import itStaffIconsImg from '../../assets/images/it-staff-icons.png';
import uiUxBgImg from '../../assets/images/ui-ux-design-bg.webp';

function Services() {
    const [activeService, setActiveService] = useState(1);

    const services = [
        {
            id: 1,
            slug: 'web-design-development',
            title: 'Custom Web Development',
            image: customWebDevImg,
            secondImage: frontendWhiteImg,
            bgImage: serviceBgImg,
            description: 'UI/UX Design. Portal Development. Open Source & Customized CMS. E-Commerce Solutions. B2B Portal Development. Website Support & Maintenance. Software Development Presence',
            icon: <FaCode />
        },
        {
            id: 2,
            slug: 'mobile-application',
            title: 'Mobile App Development',
            image: appBannerImg,
            secondImage: mobileAppWhiteImg,
            bgImage: mobileAppBgImg,
            description: 'Hybrid Apps. Android App Development. IOS App Development. React Native Apps. Flutter Apps. Progressive Web Apps',
            icon: <FaMobileAlt />
        },
        {
            id: 3,
            slug: 'digital-marketing',
            title: 'Digital Marketing Excellence',
            image: digitalMarketingImg,
            secondImage: digitalMarketingIconImg,
            bgImage: digitalMarketingBgImg,
            description: 'Social Media Marketing (SMM). Social Media Optimization (SMO). Search Engine Optimization (SEO). Email Marketing. Online Reputation Management',
            icon: <FaBullhorn />
        },
        {
            id: 4,
            slug: 'web-hosting',
            title: 'Secure Web Hosting',
            image: webHostingImg,
            secondImage: secureWebHostingImg,
            bgImage: serviceBgImg,
            description: 'Hosting Packages. Corporate Web & E-mail Hosting. Application Hosting. Virtual Private Servers (VPS). Dedicated Servers. Cloud Hosting. Google Workspace. Office 365. Domain Registration Services ',
            icon: <FaServer />
        },
        {
            id: 5,
            slug: 'bitdefender',
            title: 'Bitdefender Cybersecurity',
            image: bitdefenderImg,
            secondImage: bitdefenderIconsImg,
            bgImage: mobileAppBgImg,
            description: 'Bitdefender Internet Security. Bitdefender Antivirus Plus. Bitdefender Total Security. Bitdefender Gravity Zone Business Security. Bitdefender Gravity Zone Business Security Premium. Bitdefender Gravity Zone Business Security Enterprise',
            icon: <FaShieldAlt />
        },
        {
            id: 6,
            slug: 'it-staff-outsourcing',
            title: 'IT Staff Augmentation',
            image: itStaffAugImg,
            secondImage: itStaffIconsImg,
            bgImage: uiUxBgImg,
            description: 'Virtual CIO Expertise. End-to-End IT Project Management. Tailored Development Solutions. Comprehensive Technology Stack. Secure Workforce Offboarding. Proactive Technical Support. 24/7 Helpdesk Solutions. Seamless User Onboarding & Training. Resilient Disaster Recovery Framework. Strategic Technology Roadmap',
            icon: <FaUsers />
        }
    ];

    const activeServiceData = services.find(service => service.id === activeService);

    return (
        <>
            <section className="py-5 services-section" id="services" style={{ backgroundImage: `url(${activeServiceData.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                    <h2 className="hero-main-title display-2 text-center">Our Services</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <ul className="nav flex-column services-tabs fade-in-delay-1">
                                {services.map(service => (
                                    <li key={service.id} className="nav-item fade-in-delay-1">
                                        <a
                                            className={`nav-link ${activeService === service.id ? 'active' : ''}`}
                                            href="#"
                                            onClick={(e) => { e.preventDefault(); setActiveService(service.id); }}
                                            onMouseEnter={() => setActiveService(service.id)}
                                            onMouseLeave={() => { }}
                                        >
                                            <span className="service-icon">{service.icon}</span>
                                            {service.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-8">
                            {activeServiceData && (
                                <div className="service-content p-4">
                                    <img src={activeServiceData.image} alt={activeServiceData.title} className="img-fluid service-imgs mb-4 fade-in" style={{ height: '350px', width: '100%', objectFit: 'contain' }} />
                                    <div className="d-flex align-items-start mb-4">

                                        <ul className="flex-grow-1 my-animate">
                                            {activeServiceData.description.split('. ').map((point, index) => (
                                                point.trim() && <li key={index}>{point.trim()}{point.trim().endsWith('.') ? '' : '.'}</li>
                                            ))}
                                        </ul>


                                        <Link to={`/services/${activeServiceData.slug}`} className="dg-btn">Read More</Link>

                                    </div>
                                    <img src={activeServiceData.secondImage} alt={activeServiceData.title} className="img-fluid rounded" style={{ height: 'auto', width: '100%', objectFit: 'contain' }} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <div style={{ display: 'none' }}>
                {services.map(service => (
                    <img key={service.id} src={service.bgImage} alt="" />
                ))}
            </div>
        </>
    );
}

export default Services;
