import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";

function Careers() {
    usePageTitle('Careers - A2Z Creatorz | Join Our Team');
    return (
        <div>
            <InnerPageBanner
                title="Careers"
                subtitle="Join our team and build your career with us."
                imageSrc="/service-bg.webp"
            />
            <section className="py-5">
                <div className="container">
                    <h2>Careers</h2>
                    <p>Job openings and opportunities.</p>
                </div>
            </section>
        </div>
    );
}

export default Careers;