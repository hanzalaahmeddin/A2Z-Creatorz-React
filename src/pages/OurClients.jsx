import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";
import ClientLogosSection from "../components/ClientLogosSection";

import clientsRightImg from '../assets/images/clients-right-image.png';
import a2zClientImg from '../assets/images/clients/a2z.png';
import alJaberOpticalClientImg from '../assets/images/clients/al-jaber-optical.png';
import alShaerCorpClientImg from '../assets/images/clients/Al-Shaer-corp.png';
import assetLinkerClientImg from '../assets/images/clients/Asset-Linker.png';
import braClientImg from '../assets/images/clients/B-R-A.png';
import bhcipClientImg from '../assets/images/clients/BHCIP.png';
import crUniqueClientImg from '../assets/images/clients/cr-unique.jpg';
import dietCenterClientImg from '../assets/images/clients/Diet-Center.png';
import dimensoinClientImg from '../assets/images/clients/Dimensoin.png';
import dosteenClientImg from '../assets/images/clients/dosteen.png';
import eizoClientImg from '../assets/images/clients/Eizo.png';
import futureClientImg from '../assets/images/clients/Future.png';
import hamdardClientImg from '../assets/images/clients/Hamdard.png';
import happyHomeClientImg from '../assets/images/clients/Happy-Home.png';
import hawthornClientImg from '../assets/images/clients/hawthorn.png';
import hbfcClientImg from '../assets/images/clients/HBFC.png';
import housingRecostructionUnitClientImg from '../assets/images/clients/Housing-Recostruction-Unit.png';
import htxSteelsClientImg from '../assets/images/clients/HTX-Steels.png';
import illAustraliaClientImg from '../assets/images/clients/ill-Australia.png';
import pspcClientImg from '../assets/images/clients/PSPC.png';
import quickzLaundryClientImg from '../assets/images/clients/Quickz-Laundry.png';
import saadedeinClientImg from '../assets/images/clients/Saadedein.png';
import stateLifeClientImg from '../assets/images/clients/State-life.png';
import tdfClientImg from '../assets/images/clients/TDF.png';
import vivelClientImg from '../assets/images/clients/VIVEL.png';
import wataniyaFinanceClientImg from '../assets/images/clients/Wataniya-Finance-.png';
import zillionClientImg from '../assets/images/clients/zillion.png';
import zogaClientImg from '../assets/images/clients/zoga.png';

const clients = [
    { name: 'A2Z', image: a2zClientImg, link: '#' },
    { name: 'Al Jaber Optical', image: alJaberOpticalClientImg, link: '#' },
    { name: 'Al Shaer Corp', image: alShaerCorpClientImg, link: '#' },
    { name: 'Asset Linker', image: assetLinkerClientImg, link: '#' },
    { name: 'B R A', image: braClientImg, link: '#' },
    { name: 'BHCIP', image: bhcipClientImg, link: '#' },
    { name: 'CR Unique', image: crUniqueClientImg, link: '#' },
    { name: 'Diet Center', image: dietCenterClientImg, link: '#' },
    { name: 'Dimension', image: dimensoinClientImg, link: '#' },
    { name: 'Dosteen', image: dosteenClientImg, link: '#' },
    { name: 'Eizo', image: eizoClientImg, link: '#' },
    { name: 'Future', image: futureClientImg, link: '#' },
    { name: 'Hamdard', image: hamdardClientImg, link: '#' },
    { name: 'Happy Home', image: happyHomeClientImg, link: '#' },
    { name: 'Hawthorn', image: hawthornClientImg, link: '#' },
    { name: 'HBFC', image: hbfcClientImg, link: '#' },
    { name: 'HRU', image: housingRecostructionUnitClientImg, link: '#' },
    { name: 'HTX Steels', image: htxSteelsClientImg, link: '#' },
    { name: 'Ill Australia', image: illAustraliaClientImg, link: '#' },
    { name: 'PSPC', image: pspcClientImg, link: '#' },
    { name: 'Quickz Laundry', image: quickzLaundryClientImg, link: '#' },
    { name: 'Saadedein', image: saadedeinClientImg, link: '#' },
    { name: 'State Life', image: stateLifeClientImg, link: '#' },
    { name: 'TDF', image: tdfClientImg, link: '#' },
    { name: 'VIVEL', image: vivelClientImg, link: '#' },
    { name: 'Wataniya Finance', image: wataniyaFinanceClientImg, link: '#' },
    { name: 'Zillion', image: zillionClientImg, link: '#' },
    { name: 'Zoga', image: zogaClientImg, link: '#' },
];

function OurClients() {
    usePageTitle('Our Clients - A2Z Creatorz | Trusted Partners');
    return (
        <div>
            <InnerPageBanner
                title="Our Clients"
                subtitle="Trusted by Leading Brands – Explore Our Diverse Clientele and Discover How We Help Businesses Achieve Success with Tailored Digital Solutions."
                imageSrc={clientsRightImg}
            />
             <section className="inner-bg">
                <div className="container">
                    <ClientLogosSection clients={clients} />
                </div>
            </section>
        </div>
    );
}

export default OurClients;