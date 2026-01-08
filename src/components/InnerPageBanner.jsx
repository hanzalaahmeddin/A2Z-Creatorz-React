import { Link } from "react-router-dom";
import "../assets/css/inner-page-banner.css";

function InnerPageBanner({ title, subtitle, imageSrc }) {
    return (
        <section className="inner-page-banner">
            <div className="banner-content">
                <div className="banner-left">
                    <h1>{title}</h1>
                    <p className="fade-in-delay-1">{subtitle}</p>
                    <Link to="/contact" className="dg-btn fade-in-delay-1">Get Your Free Quote</Link>
                </div>
                <div className="banner-right fade-in-delay-1">
                    <img src={imageSrc} alt={title} />
                </div>
            </div>
        </section>
    );
}

export default InnerPageBanner;