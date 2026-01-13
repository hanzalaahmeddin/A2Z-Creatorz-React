import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";

function EcommercePortfolio() {
    usePageTitle('Ecommerce Portfolio - A2Z Creatorz | Online Store Projects');
    return (
        <div>
            <InnerPageBanner
                title="Ecommerce Portfolio"
                subtitle="Discover our ecommerce platform successes."
                imageSrc="/digital-marketing.webp"
            />
            <section className="py-5">
                <div className="container">
                    <h2>Ecommerce Portfolio</h2>
                    <p>Ecommerce projects.</p>
                </div>
            </section>
        </div>
    );
}

export default EcommercePortfolio;