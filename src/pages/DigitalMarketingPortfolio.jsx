import InnerPageBanner from "../components/InnerPageBanner";

function DigitalMarketingPortfolio() {
    return (
        <div>
            <InnerPageBanner
                title="Digital Marketing Portfolio"
                subtitle="Explore our digital marketing campaign successes."
                imageSrc="/Digital-Marketing-icon.png"
            />
            <section className="py-5">
                <div className="container">
                    <h2>Digital Marketing Portfolio</h2>
                    <p>Digital marketing projects.</p>
                </div>
            </section>
        </div>
    );
}

export default DigitalMarketingPortfolio;