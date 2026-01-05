import InnerPageBanner from "../components/InnerPageBanner";

function WebHosting() {
    return (
        <div>
            <InnerPageBanner
                title="Web Hosting"
                subtitle="Reliable and secure web hosting solutions for your websites."
                imageSrc="/web-hosting.png"
            />
            <section className="py-5">
                <div className="container">
                    <h2>Web Hosting</h2>
                    <p>Details about web hosting services.</p>
                </div>
            </section>
        </div>
    );
}

export default WebHosting;