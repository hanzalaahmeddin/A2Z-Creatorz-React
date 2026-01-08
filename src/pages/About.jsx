import InnerPageBanner from "../components/InnerPageBanner";
import ContactReachUs from "../components/ContactReachUs";

function About() {
    return (
        <div>
            <InnerPageBanner
                title="About Us"
                subtitle="Innovating the Digital World Discover the Vision Behind A2Z Creatorz!"
                imageSrc="/src/assets/images/about-us-right-image.png"
            />
            <section className="py-5">
                <div className="container">
                    <h2 className="">About Us</h2>
                    <p>
                        Innovating the Digital World
                        Discover the Vision Behind A2Z Creatorz!
                    </p>
                </div>
            </section>
            <ContactReachUs />
        </div>
    );
}

export default About;
