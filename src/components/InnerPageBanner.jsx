import { Link } from "react-router-dom";
import "../assets/css/inner-page-banner.css";

function InnerPageBanner({ title, subtitle, imageSrc }) {
    return (
        <section className="inner-page-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 px-5">
                        <h1>{title}</h1>
                        <p className="fade-in-delay-1">{subtitle}</p>
                        <Link to="/contact" className="dg-btn fade-in-delay-1">Get Your Free Quote</Link>
                    </div>
                    <div className="col-md-6">
                        <div className="fade-in-delay-1 px-5">
                    <img className="img-fluid" src={imageSrc} alt={title} />
                </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default InnerPageBanner;