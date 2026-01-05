import InnerPageBanner from "../components/InnerPageBanner";
import ContactReachUs from "../components/ContactReachUs";

function About() {
    return (
        <div>
            <InnerPageBanner
                title="About Us"
                subtitle="A2Z Creatorz is a leading digital agency specializing in web and mobile solutions, delivering innovative and high-quality services to clients worldwide."
                imageSrc="/about-left-img.webp"
            />
            <section className="py-5">
                <div className="container">
                    <h2>About Us</h2>
                    <p>
                        A2Z Creatorz is a digital agency providing web and mobile solutions.
                    </p>
                </div>
            </section>
            <ContactReachUs />
        </div>
    );
}

export default About;
