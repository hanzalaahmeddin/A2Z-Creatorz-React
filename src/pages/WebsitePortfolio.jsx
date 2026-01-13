import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";

function WebsitePortfolio() {
    usePageTitle('Website Portfolio - A2Z Creatorz | Our Web Design Projects');
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