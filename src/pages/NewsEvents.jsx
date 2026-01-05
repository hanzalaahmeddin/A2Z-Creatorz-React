import InnerPageBanner from "../components/InnerPageBanner";

function NewsEvents() {
    return (
        <div>
            <InnerPageBanner
                title="News & Events"
                subtitle="Stay updated with the latest news and events from A2Z Creatorz."
                imageSrc="/service-bg.webp"
            />
            <section className="py-5">
                <div className="container">
                    <h2>News & Events</h2>
                    <p>Latest updates and events.</p>
                </div>
            </section>
        </div>
    );
}

export default NewsEvents;