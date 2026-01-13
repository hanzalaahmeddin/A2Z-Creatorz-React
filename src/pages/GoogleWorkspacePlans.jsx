import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";

function GoogleWorkspacePlans() {
    usePageTitle('Google Workspace Plans - A2Z Creatorz | Productivity Tools');
    return (
        <div>
            <InnerPageBanner
                title="Google Work Space Plans"
                subtitle="Streamline your productivity with Google Workspace solutions."
                imageSrc="/service-bg.webp"
            />
            <section className="py-5">
                <div className="container">
                    <h2>Google Work Space Plans</h2>
                    <p>Details about Google Workspace plans.</p>
                </div>
            </section>
        </div>
    );
}

export default GoogleWorkspacePlans;