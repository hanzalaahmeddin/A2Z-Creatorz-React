import InnerPageBanner from "../components/InnerPageBanner";

function Bitdefender() {
    return (
        <div>
            <InnerPageBanner
                title="Bitdefender"
                subtitle="Advanced cybersecurity solutions to protect your business."
                imageSrc="/Bitdefender-img.png"
            />
            <section className="py-5">
                <div className="container">
                    <h2>Bitdefender</h2>
                    <p>Details about Bitdefender security services.</p>
                </div>
            </section>
        </div>
    );
}

export default Bitdefender;