import InnerPageBanner from "../components/InnerPageBanner";

function UiUxDesign() {
    return (
        <div>
            <InnerPageBanner
                title="UI/UX Design"
                subtitle="Design intuitive user interfaces and experiences that delight users."
                imageSrc="/ui-ux-design-bg.webp"
            />
            <section className="py-5">
                <div className="container">
                    <h2>UI/UX Design</h2>
                    <p>Details about UI/UX design services.</p>
                </div>
            </section>
        </div>
    );
}

export default UiUxDesign;