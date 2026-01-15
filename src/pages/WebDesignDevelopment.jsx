import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";
import ContactReachUs from "../components/ContactReachUs";
import ToolsSection from "../components/ToolsSection";

function WebDesignDevelopment() {
    usePageTitle('Web Design & Development Services - A2Z Creatorz | Custom Websites');
    const tools = [
        { name: 'HTML', image: '/src/assets/images/html.webp' },
        { name: 'CSS', image: '/src/assets/images/css.png' },
        { name: 'JavaScript', image: '/src/assets/images/javascript.png' },
        { name: 'React', image: '/src/assets/images/react.png' },
        { name: 'Next.js', image: '/src/assets/images/nextjs.png' },
        { name: 'PHP', image: '/src/assets/images/php.png' },
        { name: 'Laravel', image: '/src/assets/images/laravel.png' },
        { name: 'Python', image: '/src/assets/images/python.webp' },
        { name: 'ASP.net', image: '/src/assets/images/asp.webp' },
        { name: 'Swift', image: '/src/assets/images/swift.png' },
        { name: 'Bootstrap', image: '/src/assets/images/bootstrap.png' },
        { name: 'WordPress', image: '/src/assets/images/wordpress.png' },
        { name: 'Elementor', image: '/src/assets/images/elementor.webp' },
        { name: 'Shopify', image: '/src/assets/images/shopify.webp' },
        { name: 'Magento', image: '/src/assets/images/magento.webp' },
        { name: 'Wix', image: '/src/assets/images/wix.png' },
        { name: 'Webflow', image: '/src/assets/images/webflow.png' },
        { name: 'Squarespace', image: '/src/assets/images/squarespace.png' }
    ];

    return (
        <div>
            <InnerPageBanner
                title="Web Design & Development"
                subtitle="Crafting Stunning Websites That Drive Results Experience Innovation with A2Z Creatorz!"
                imageSrc="/src/assets/images/service-website-right.png"
            />
            <section className="inner-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img className="img-fluid fade-in-delay-1" src="/src/assets/images/web-design-img-left.png" alt="A@Z Creatorz Image" />
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