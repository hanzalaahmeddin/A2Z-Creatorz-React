import InnerPageBanner from "../components/InnerPageBanner";

function OurClients() {
    return (
        <div>
            <InnerPageBanner
                title="Our Clients"
                subtitle="Trusted by Leading Brands – Explore Our Diverse Clientele and Discover How We Help Businesses Achieve Success with Tailored Digital Solutions."
                imageSrc="/src/assets/images/clients-right-image.png"
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