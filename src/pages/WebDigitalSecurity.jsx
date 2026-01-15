import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";
import ContactReachUs from "../components/ContactReachUs";
import ToolsSection from "../components/ToolsSection";

import secureWebHostingImg from '../assets/images/secure-webhosting.png';
import a2zAboutImg from '../assets/images/a2z-about-image-1.webp';

function WebDigitalSecurity() {
    usePageTitle('Web & Digital Security - A2Z Creatorz | Protect Your Digital Assets');
    const tools = [
        { name: 'Bitdefender', image: '/src/assets/images/bitdefender.png' },
        { name: 'Firewall', image: '/src/assets/images/firewall.png' },
        { name: 'SSL', image: '/src/assets/images/ssl.png' },
        { name: 'VPN', image: '/src/assets/images/vpn.png' },
        { name: 'Antivirus', image: '/src/assets/images/antivirus.png' },
        { name: 'Intrusion Detection', image: '/src/assets/images/intrusion-detection.png' }
    ];

    return (
        <div>
            <InnerPageBanner
                title="Web & Digital Security"
                subtitle="Protect your digital assets with advanced security solutions."
                imageSrc={secureWebHostingImg}
            />
            <section className="inner-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img className="img-fluid fade-in-delay-1" src={a2zAboutImg} alt="A2Z Creatorz Image" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="testimonials-subtitle fade-in-delay-2 mb-4">Who Are We</h2>
                            <p className="fade-in-delay-2">
                                Protect your digital assets with comprehensive security solutions that safeguard against threats. Our experts implement robust measures to ensure data integrity, privacy, and compliance across your digital infrastructure.
                            </p>
                        </div>
                    </div>
                    <ToolsSection tools={tools} />

                </div>
                <ContactReachUs />
            </section>

        </div>
    );
}

export default WebDigitalSecurity;