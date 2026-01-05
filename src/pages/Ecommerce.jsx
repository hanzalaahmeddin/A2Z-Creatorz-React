import InnerPageBanner from "../components/InnerPageBanner";

function Ecommerce() {
    return (
        <div>
            <InnerPageBanner
                title="Ecommerce"
                subtitle="Build robust online stores that drive sales and customer satisfaction."
                imageSrc="/digital-marketing.webp"
            />
            <section className="py-5">
                <div className="container">
                    <h2>Ecommerce</h2>
                    <p>Details about ecommerce solutions.</p>
                </div>
            </section>
        </div>
    );
}

export default Ecommerce;