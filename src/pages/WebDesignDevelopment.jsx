import InnerPageBanner from "../components/InnerPageBanner";
import ContactReachUs from "../components/ContactReachUs";
import ToolsSection from "../components/ToolsSection";

function WebDesignDevelopment() {
    const tools = [
        { name: 'HTML', image: '/src/assets/images/html.webp' },
        { name: 'CSS', image: '/src/assets/images/css.png' },
        { name: 'JavaScript', image: '/src/assets/images/javascript.png' },
        { name: 'React', image: '/src/assets/images/react.png' },
        { name: 'Next.js', image: '/src/assets/images/nextjs.png' },
        { name: 'Bootstrap', image: '/src/assets/images/bootstrap.png' },
        { name: 'WordPress', image: '/src/assets/images/wordpress.png' },
        { name: 'Elementor', image: '/src/assets/images/elementor.png' },
        { name: 'Shopify', image: '/src/assets/images/shopify.png' },
        { name: 'Joomla', image: '/src/assets/images/joomla.png' },
        { name: 'Magento', image: '/src/assets/images/magento.png' },
        { name: 'PHP', image: '/src/assets/images/php.png' },
        { name: 'Wix', image: '/src/assets/images/wix.png' },
        { name: 'Duda', image: '/src/assets/images/duda.png' },
        { name: 'Webflow', image: '/src/assets/images/webflow.png' },
        { name: 'Squarespace', image: '/src/assets/images/squarespace.png' }
    ];

    return (
        <div>
            <InnerPageBanner
                title="Web Design & Development"
                subtitle="Crafting Stunning Websites That Drive Results Experience Innovation with A2Z Creatorz!"
                imageSrc="/web.png"
            />
            <section className="inner-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img className="img-fluid fade-in-delay-1" src="/src/assets/images/a2z-about-image-1.webp" alt="A@Z Creatorz Image" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="testimonials-subtitle fade-in-delay-2 mb-4">Who Are We</h2>
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