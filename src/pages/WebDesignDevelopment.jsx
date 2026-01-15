import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";
import ContactReachUs from "../components/ContactReachUs";
import ToolsSection from "../components/ToolsSection";

// Import images
import htmlImg from '../assets/images/html.webp';
import cssImg from '../assets/images/css.png';
import jsImg from '../assets/images/javascript.png';
import reactImg from '../assets/images/react.png';
import nextjsImg from '../assets/images/nextjs.png';
import phpImg from '../assets/images/php.png';
import laravelImg from '../assets/images/laravel.png';
import pythonImg from '../assets/images/python.webp';
import aspImg from '../assets/images/asp.webp';
import swiftImg from '../assets/images/swift.png';
import bootstrapImg from '../assets/images/bootstrap.png';
import wordpressImg from '../assets/images/wordpress.png';
import elementorImg from '../assets/images/elementor.webp';
import shopifyImg from '../assets/images/shopify.webp';
import magentoImg from '../assets/images/magento.webp';
import wixImg from '../assets/images/wix.png';
import bannerImg from '../assets/images/service-website-right.png';
import webDesignImg from '../assets/images/web-design-img-left.png';

function WebDesignDevelopment() {
    usePageTitle('Web Design & Development Services - A2Z Creatorz | Custom Websites');
    const tools = [
        { name: 'HTML', image: htmlImg },
        { name: 'CSS', image: cssImg },
        { name: 'JavaScript', image: jsImg },
        { name: 'React', image: reactImg },
        { name: 'Next.js', image: nextjsImg },
        { name: 'PHP', image: phpImg },
        { name: 'Laravel', image: laravelImg },
        { name: 'Python', image: pythonImg },
        { name: 'ASP.net', image: aspImg },
        { name: 'Swift', image: swiftImg },
        { name: 'Bootstrap', image: bootstrapImg },
        { name: 'WordPress', image: wordpressImg },
        { name: 'Elementor', image: elementorImg },
        { name: 'Shopify', image: shopifyImg },
        { name: 'Magento', image: magentoImg },
        { name: 'Wix', image: wixImg }
    ];

    return (
        <div>
            <InnerPageBanner
                title="Web Design & Development"
                subtitle="Crafting Stunning Websites That Drive Results Experience Innovation with A2Z Creatorz!"
                imageSrc={bannerImg}
            />
            <section className="inner-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img className="img-fluid fade-in-delay-1" src={webDesignImg} alt="A@Z Creatorz Image" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="testimonials-subtitle fade-in-delay-2 mb-4">Website Design & Development</h2>
                            <p className="fade-in-delay-2">
                                Transform your online presence with bespoke websites that are visually striking, highly functional, and future-ready. Leveraging advanced technologies, we craft responsive, user-centric designs that deliver seamless experiences across devices, ensuring your brand stands out and drives growth.
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

export default WebDesignDevelopment;