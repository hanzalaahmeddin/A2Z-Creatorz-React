import { Link } from "react-router-dom";
import "../assets/css/inner-page-banner.css";

function InnerPageBanner({ title, subtitle, imageSrc }) {
    return (
        <section className="inner-page-banner">
            <div className="banner-content">
                <div className="banner-left">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                    <Link to="/contact" className="quote-btn">Get Your Free Quote</Link>
                </div>
                <div className="banner-right">
                    <img src={imageSrc} alt={title} />
                </div>
            </div>
        </section>
    );
}

export default InnerPageBanner;