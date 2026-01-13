import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";
import ContactReachUs from "../components/ContactReachUs";

function Portfolio() {
    usePageTitle('Portfolio - A2Z Creatorz | Our Successful Projects');

    const portfolios = [
        { title: 'Website', image: '/src/assets/images/portfolio-web.png', path: '/portfolio/website' },
        { title: 'Ecommerce', image: '/src/assets/images/portfolio-ecommerce.png', path: '/portfolio/ecommerce' },
        { title: 'Mobile Application', image: '/src/assets/images/portfolio-mobile.png', path: '/portfolio/mobile-application' },
        { title: 'Digital Marketing', image: '/src/assets/images/portfolio-digital.png', path: '/portfolio/digital-marketing' },
        { title: 'Web Application', image: '/src/assets/images/portfolio-web.png', path: '/portfolio/web-application' },
    ];

    return (
        <div>
            <InnerPageBanner
                title="Portfolio"
                subtitle="Explore our successful projects and case studies across various industries."
                imageSrc="/src/assets/images/portfolio-right-image.png"
            />
            <section className="inner-bg">
                
            
            <section className="portfolio-cards-section">
                <div className="container">
                    <div className="row">
                        {portfolios.map((portfolio, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <Link to={portfolio.path} className="portfolio-card">
                                    <img src={portfolio.image} alt={portfolio.title} className="img-fluid" />
                                    <h3>{portfolio.title}</h3>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            </section>

        </div>
    );
}

export default Portfolio;
