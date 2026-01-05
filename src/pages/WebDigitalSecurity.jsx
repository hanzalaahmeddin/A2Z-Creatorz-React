import InnerPageBanner from "../components/InnerPageBanner";

function WebDigitalSecurity() {
    return (
        <div>
            <InnerPageBanner
                title="Web & Digital Security"
                subtitle="Protect your digital assets with advanced security solutions."
                imageSrc="/secure-webhosting.png"
            />
            <section className="py-5">
                <div className="container">
                    <h2>Web & Digital Security</h2>
                    <p>Details about web and digital security services.</p>
                </div>
            </section>
        </div>
    );
}

export default WebDigitalSecurity;