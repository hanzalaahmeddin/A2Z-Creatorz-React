import InnerPageBanner from "../components/InnerPageBanner";

function WebsitePortfolio() {
    return (
        <div>
            <InnerPageBanner
                title="Website Portfolio"
                subtitle="View our stunning website designs and developments."
                imageSrc="/web.png"
            />
            <section className="py-5">
                <div className="container">
                    <h2>Website Portfolio</h2>
                    <p>Examples of websites we've built.</p>
                </div>
            </section>
        </div>
    );
}

export default WebsitePortfolio;