import React, { useState } from 'react';
import { FaCode, FaMobileAlt, FaBullhorn, FaPalette, FaShieldAlt, FaUsers, FaServer } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Services() {
    const [activeService, setActiveService] = useState(1);

    const services = [
        {
            id: 1,
            slug: 'custom-web-development',
            title: 'Custom Web Development',
            image: '/src/assets/images/Custom-Web-Development.png',
            secondImage: '/src/assets/images/frontend-white.png',
            bgImage: '/src/assets/images/service-bg.webp',
            description: 'UI/UX Design. Portal Development. Open Source & Customized CMS. E-Commerce Solutions. B2B Portal Development. Website Support & Maintenance. Software Development Presence',
            icon: <FaCode />
        },
        {
            id: 2,
            slug: 'mobile-app-development',
            title: 'Mobile App Development',
            image: '/src/assets/images/App-Banner.png',
            secondImage: '/src/assets/images/mobile-appication-white.png',
            bgImage: '/src/assets/images/mobile-application-bg.webp',
            description: 'Hybrid Apps. Android App Development. IOS App Development. React Native Apps. Flutter Apps. Progressive Web Apps',
            icon: <FaMobileAlt />
        },
        {
            id: 3,
            slug: 'digital-marketing-excellence',
            title: 'Digital Marketing Excellence',
            image: '/src/assets/images/digital-marketing.webp',
            secondImage: '/src/assets/images/Digital-Marketing-icon.png',
            bgImage: '/src/assets/images/digital-marketing-bg.webp',
            description: 'Social Media Marketing (SMM). Social Media Optimization (SMO). Search Engine Optimization (SEO). Email Marketing. Online Reputation Management',
            icon: <FaBullhorn />
        },
        {
            id: 4,
            slug: 'secure-web-hosting',
            title: 'Secure Web Hosting',
            image: '/src/assets/images/web-hosting.png',
            secondImage: '/src/assets/images/secure-webhosting.png',
            bgImage: '/src/assets/images/service-bg.webp',
            description: 'Hosting Packages. Corporate Web & E-mail Hosting. Application Hosting. Virtual Private Servers (VPS). Dedicated Servers. Cloud Hosting. Google Workspace. Office 365. Domain Registration Services ',
            icon: <FaServer />
        },
        {
            id: 5,
            slug: 'bitdefender-cybersecurity',
            title: 'Bitdefender Cybersecurity',
            image: '/src/assets/images/Bitdefender-img.png',
            secondImage: '/src/assets/images/bitdefender-icons.png',
            bgImage: '/src/assets/images/mobile-application-bg.webp',
            description: 'Bitdefender Internet Security. Bitdefender Antivirus Plus. Bitdefender Total Security. Bitdefender Gravity Zone Business Security. Bitdefender Gravity Zone Business Security Premium. Bitdefender Gravity Zone Business Security Enterprise',
            icon: <FaShieldAlt />
        },
        {
            id: 6,
            slug: 'it-staff-augmentation',
            title: 'IT Staff Augmentation',
            image: '/src/assets/images/it-staff-augmentation.png',
            secondImage: '/src/assets/images/it-staff-icons.png',
            bgImage: '/src/assets/images/ui-ux-design-bg.webp',
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
