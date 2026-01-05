import InnerPageBanner from "../components/InnerPageBanner";
import ContactReachUs from "../components/ContactReachUs";

function WebDesignDevelopment() {
    return (
        <div>
            <InnerPageBanner
                title="Web Design & Development"
                subtitle="Create stunning, responsive websites that drive results and engage your audience."
                imageSrc="/web.png"
            />
            <section className="py-5">
                <div className="container">
                    <h2>Web Design & Development</h2>
                    <p>Details about web design and development services.</p>
                </div>
            </section>
            <ContactReachUs />
        </div>
    );
}

export default WebDesignDevelopment;