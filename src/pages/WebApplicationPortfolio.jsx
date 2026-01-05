import InnerPageBanner from "../components/InnerPageBanner";

function WebApplicationPortfolio() {
    return (
        <div>
            <InnerPageBanner
                title="Web Application Portfolio"
                subtitle="Check out our web application development projects."
                imageSrc="/Custom-Web-Development.png"
            />
            <section className="py-5">
                <div className="container">
                    <h2>Web Application Portfolio</h2>
                    <p>Web application projects.</p>
                </div>
            </section>
        </div>
    );
}

export default WebApplicationPortfolio;