import InnerPageBanner from "../components/InnerPageBanner";

function OurClients() {
    return (
        <div>
            <InnerPageBanner
                title="Our Clients"
                subtitle="Trusted by leading companies worldwide."
                imageSrc="/service-bg.webp"
            />
            <section className="py-5">
                <div className="container">
                    <h2>Our Clients</h2>
                    <p>List of our valued clients.</p>
                </div>
            </section>
        </div>
    );
}

export default OurClients;