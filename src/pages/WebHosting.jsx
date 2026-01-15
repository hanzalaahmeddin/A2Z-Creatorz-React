import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";
import ContactReachUs from "../components/ContactReachUs";
import ToolsSection from "../components/ToolsSection";

import webHostingImg from '../assets/images/web-hosting.png';
import a2zAboutImg from '../assets/images/a2z-about-image-1.webp';

function WebHosting() {
    usePageTitle('Web Hosting Services - A2Z Creatorz | Reliable Hosting Solutions');
    const tools = [
        { name: 'cPanel', image: '/src/assets/images/cpanel.png' },
        { name: 'Plesk', image: '/src/assets/images/plesk.png' },
        { name: 'Apache', image: '/src/assets/images/apache.png' },
        { name: 'Nginx', image: '/src/assets/images/nginx.png' },
        { name: 'MySQL', image: '/src/assets/images/mysql.png' },
        { name: 'Cloudflare', image: '/src/assets/images/cloudflare.png' }
    ];

    return (
        <div>
            <InnerPageBanner
                title="Web Hosting"
                subtitle="Reliable and secure web hosting solutions for your websites."
                imageSrc={webHostingImg}
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
                                Reliable and secure web hosting solutions tailored to your needs. Our hosting services offer high uptime, fast performance, and scalable options to support your growing online presence and ensure optimal user experience.
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

export default WebHosting;