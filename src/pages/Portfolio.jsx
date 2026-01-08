import InnerPageBanner from "../components/InnerPageBanner";
import ContactReachUs from "../components/ContactReachUs";

function Portfolio() {
    return (
        <div>
            <InnerPageBanner
                title="Portfolio"
                subtitle="Explore our successful projects and case studies across various industries."
                imageSrc="/src/assets/images/portfolio-right-image.png"
            />
            <section className="py-5">
                <div className="container">
                    <h2>Portfolio</h2>
                    <p>Showcase of our work.</p>
                </div>
            </section>
            <ContactReachUs />
        </div>
    );
}

export default Portfolio;