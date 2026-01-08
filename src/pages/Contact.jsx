import InnerPageBanner from "../components/InnerPageBanner";

function Contact() {
    return (
        <div>
            <InnerPageBanner
                title="Contact Us"
                subtitle="Get in touch with us for your next project."
                imageSrc="/src/assets/images/contact-right-image.png"
            />
            <section className="py-5">
                <div className="container">
                    <h2>Contact Us</h2>
                    <p>Contact form and details.</p>
                </div>
            </section>
        </div>
    );
}

export default Contact;