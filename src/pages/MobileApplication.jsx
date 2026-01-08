import InnerPageBanner from "../components/InnerPageBanner";

function MobileApplication() {
    return (
        <div>
            <InnerPageBanner
                title="Mobile Application"
                subtitle="Develop cutting-edge mobile apps for iOS and Android platforms."
                imageSrc="/ser-mobile-img.png"
            />
            <section className="py-5">
                <div className="container">
                    <h2>Mobile Application</h2>
                    <p>Details about mobile application development.</p>
                </div>
            </section>
        </div>
    );
}

export default MobileApplication;