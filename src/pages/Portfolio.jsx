import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";
import OurPortfolio from "../components/home/OurPortfolio";

import bannerImg from '../assets/images/portfolio-right-image.png';
import portfolioWebImg from '../assets/images/portfolio-web.png';
import portfolioEcommerceImg from '../assets/images/portfolio-ecommerce.png';
import portfolioMobileImg from '../assets/images/portfolio-mobile.png';
import portfolioDigitalImg from '../assets/images/portfolio-digital.png';

function Portfolio() {
    usePageTitle('Portfolio - A2Z Creatorz | Our Successful Projects');

    const portfolios = [
        { title: 'Website', image: portfolioWebImg, path: '/portfolio/website' },
        { title: 'Ecommerce', image: portfolioEcommerceImg, path: '/portfolio/ecommerce' },
        { title: 'Mobile Application', image: portfolioMobileImg, path: '/portfolio/mobile-application' },
        { title: 'Digital Marketing', image: portfolioDigitalImg, path: '/portfolio/digital-marketing' },
        { title: 'Web Application', image: portfolioWebImg, path: '/portfolio/web-application' },
    ];

    return (
        <div>
            <InnerPageBanner
                title="Portfolio"
                subtitle="Explore our successful projects and case studies across various industries."
                imageSrc={bannerImg}
            />
            <OurPortfolio />


        </div>
    );
}

export default Portfolio;
