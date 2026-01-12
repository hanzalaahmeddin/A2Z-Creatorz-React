import InnerPageBanner from "../components/InnerPageBanner";
import ContactReachUs from "../components/ContactReachUs";
import ToolsSection from "../components/ToolsSection";

function UiUxDesign() {
    const tools = [
        { name: 'Figma', image: '/src/assets/images/figma.png' },
        { name: 'Adobe XD', image: '/src/assets/images/adobe-xd.png' },
        { name: 'Sketch', image: '/src/assets/images/sketch.png' },
        { name: 'InVision', image: '/src/assets/images/invision.png' },
        { name: 'Photoshop', image: '/src/assets/images/photoshop.png' },
        { name: 'Illustrator', image: '/src/assets/images/illustrator.png' }
    ];

    return (
        <div>
            <InnerPageBanner
                title="UI/UX Design"
                subtitle="Design intuitive user interfaces and experiences that delight users."
                imageSrc="/ui-ux-design-bg.webp"
            />
            <section className="inner-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img className="img-fluid fade-in-delay-1" src="/src/assets/images/a2z-about-image-1.webp" alt="A2Z Creatorz Image" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="testimonials-subtitle fade-in-delay-2 mb-4">Who Are We</h2>
                            <p className="fade-in-delay-2">
                                Design intuitive and engaging user interfaces and experiences that captivate your audience. Our design experts create user-centric solutions that enhance usability, accessibility, and overall satisfaction, ensuring your digital products stand out.
                            </p>
                        </div>
                    </div>
                    <ToolsSection tools={tools} />

                </div>
                <ContactReachUs />
            </section>

        </div>
    );
}

export default UiUxDesign;