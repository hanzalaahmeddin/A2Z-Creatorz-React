import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";
import ContactReachUs from "../components/ContactReachUs";
import ToolsSection from "../components/ToolsSection";

import digitalRightImg from '../assets/images/a2z-digital-right-img.webp';
import a2zAboutImg from '../assets/images/a2z-about-image-1.webp';

function DigitalMarketing() {
    usePageTitle('Digital Marketing Services - A2Z Creatorz | SEO, PPC, Social Media Marketing');
    const tools = [
        { name: 'Google Analytics', image: '/src/assets/images/google-analytics.png' },
        { name: 'Facebook Ads', image: '/src/assets/images/facebook-ads.png' },
        { name: 'SEMrush', image: '/src/assets/images/semrush.png' },
        { name: 'Ahrefs', image: '/src/assets/images/ahrefs.png' },
        { name: 'Mailchimp', image: '/src/assets/images/mailchimp.png' },
        { name: 'Hootsuite', image: '/src/assets/images/hootsuite.png' }
    ];

    return (
        <div>
            <InnerPageBanner
                title="Digital Marketing"
                subtitle="Enhance your online presence with effective digital marketing strategies."
                imageSrc={digitalRightImg}
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
                                Enhance your online presence with data-driven digital marketing strategies that drive traffic, engagement, and conversions. Our expert team utilizes cutting-edge tools and techniques to optimize your campaigns across all digital channels, ensuring your brand reaches the right audience at the right time.
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

export default DigitalMarketing;