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
            <section className="inner-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6">
                            <h2 className="testimonials-subtitle fade-in-delay-2 mb-4">Who Are We</h2>
                            <p className="fade-in-delay-2">
                                A2Z Creatorz has been a trailblazer in delivering world-class web services for over 17 years. Since its inception in June 2007, the company has forged strategic alliances and successfully executed a diverse range of projects spanning National, International, and Government sectors.
                            </p>
                            <p className="fade-in-delay-2">Over the years, A2Z Creatorz has demonstrated remarkable growth, expanding its global footprint from Canada to United Kingdom, Middle East, Saudi Arabia, and Pakistan. With an unwavering commitment to innovation and excellence, the company is poised to explore new, high-potential markets worldwide, further solidifying its position as a leader in the digital solutions landscape.</p>
                        </div>
                    </div>

                </div>
                 <ContactReachUs />
            </section>
           
        </div>
    );
}

export default About;
