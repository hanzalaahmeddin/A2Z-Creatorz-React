import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";

function MobileApplicationPortfolio() {
    usePageTitle('Mobile Application Portfolio - A2Z Creatorz | App Development Projects');
    return (
        <div>
            <InnerPageBanner
                title="Mobile Application Portfolio"
                subtitle="See our innovative mobile app developments."
                imageSrc="/mobile.png"
            />
            <section className="py-5">
                <div className="container">
                    <h2>Mobile Application Portfolio</h2>
                    <p>Mobile app projects.</p>
                </div>
            </section>
        </div>
    );
}

export default MobileApplicationPortfolio;