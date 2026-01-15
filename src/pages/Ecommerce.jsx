import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";
import ContactReachUs from "../components/ContactReachUs";
import ToolsSection from "../components/ToolsSection";

import ecommerceRightImg from '../assets/images/a2z-ecommerce-right.webp';
import a2zAboutImg from '../assets/images/a2z-about-image-1.webp';

function Ecommerce() {
    usePageTitle('Ecommerce Solutions - A2Z Creatorz | Online Stores & Shopping Platforms');
    const tools = [
        { name: 'Shopify', image: '/src/assets/images/shopify.png' },
        { name: 'WooCommerce', image: '/src/assets/images/woocommerce.png' },
        { name: 'Magento', image: '/src/assets/images/magento.png' },
        { name: 'BigCommerce', image: '/src/assets/images/bigcommerce.png' },
        { name: 'Stripe', image: '/src/assets/images/stripe.png' },
        { name: 'PayPal', image: '/src/assets/images/paypal.png' }
    ];

    return (
        <div>
            <InnerPageBanner
                title="Ecommerce"
                subtitle="Build robust online stores that drive sales and customer satisfaction."
                imageSrc={ecommerceRightImg}
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
                                Build robust and scalable online stores that drive sales and enhance customer experiences. Our ecommerce solutions integrate advanced features and secure payment gateways to help your business thrive in the digital marketplace.
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

export default Ecommerce;