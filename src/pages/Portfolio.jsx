import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";
import OurPortfolio from "../components/home/OurPortfolio";

import bannerImg from '../assets/images/portfolio-right-image.png';

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
                imageSrc={bannerImg}
            />
            <OurPortfolio />
            

        </div>
    );
}

export default Portfolio;
