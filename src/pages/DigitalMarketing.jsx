import InnerPageBanner from "../components/InnerPageBanner";

function DigitalMarketing() {
    return (
        <div>
            <InnerPageBanner
                title="Digital Marketing"
                subtitle="Enhance your online presence with effective digital marketing strategies."
                imageSrc="/Digital-Marketing-icon.png"
            />
            <section className="py-5">
                <div className="container">
                    <h2>Digital Marketing</h2>
                    <p>Details about digital marketing services.</p>
                </div>
            </section>
        </div>
    );
}

export default DigitalMarketing;