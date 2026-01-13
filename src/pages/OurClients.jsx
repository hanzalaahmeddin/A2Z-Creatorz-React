import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";
import ClientLogosSection from "../components/ClientLogosSection";

const clients = [
    { name: 'A2Z', image: 'src/assets/images/clients/a2z.png', link: '#' },
    { name: 'Al Jaber Optical', image: 'src/assets/images/clients/al-jaber-optical.png', link: '#' },
    { name: 'Al Shaer Corp', image: 'src/assets/images/clients/Al-Shaer-corp.png', link: '#' },
    { name: 'Asset Linker', image: 'src/assets/images/clients/Asset-Linker.png', link: '#' },
    { name: 'B R A', image: 'src/assets/images/clients/B-R-A.png', link: '#' },
    { name: 'BHCIP', image: 'src/assets/images/clients/BHCIP.png', link: '#' },
    { name: 'CR Unique', image: 'src/assets/images/clients/cr-unique.jpg', link: '#' },
    { name: 'Diet Center', image: 'src/assets/images/clients/Diet-Center.png', link: '#' },
    { name: 'Dimension', image: 'src/assets/images/clients/Dimensoin.png', link: '#' },
    { name: 'Dosteen', image: 'src/assets/images/clients/dosteen.png', link: '#' },
    { name: 'Eizo', image: 'src/assets/images/clients/Eizo.png', link: '#' },
    { name: 'Future', image: 'src/assets/images/clients/Future.png', link: '#' },
    { name: 'Hamdard', image: 'src/assets/images/clients/Hamdard.png', link: '#' },
    { name: 'Happy Home', image: 'src/assets/images/clients/Happy-Home.png', link: '#' },
    { name: 'Hawthorn', image: 'src/assets/images/clients/hawthorn.png', link: '#' },
    { name: 'HBFC', image: 'src/assets/images/clients/HBFC.png', link: '#' },
    { name: 'HRU', image: 'src/assets/images/clients/Housing-Recostruction-Unit.png', link: '#' },
    { name: 'HTX Steels', image: 'src/assets/images/clients/HTX-Steels.png', link: '#' },
    { name: 'Ill Australia', image: 'src/assets/images/clients/ill-Australia.png', link: '#' },
    { name: 'PSPC', image: 'src/assets/images/clients/PSPC.png', link: '#' },
    { name: 'Quickz Laundry', image: 'src/assets/images/clients/Quickz-Laundry.png', link: '#' },
    { name: 'Saadedein', image: 'src/assets/images/clients/Saadedein.png', link: '#' },
    { name: 'State Life', image: 'src/assets/images/clients/State-life.png', link: '#' },
    { name: 'TDF', image: 'src/assets/images/clients/TDF.png', link: '#' },
    { name: 'VIVEL', image: 'src/assets/images/clients/VIVEL.png', link: '#' },
    { name: 'Wataniya Finance', image: 'src/assets/images/clients/Wataniya-Finance-.png', link: '#' },
    { name: 'Zillion', image: 'src/assets/images/clients/zillion.png', link: '#' },
    { name: 'Zoga', image: 'src/assets/images/clients/zoga.png', link: '#' },
];

function OurClients() {
    usePageTitle('Our Clients - A2Z Creatorz | Trusted Partners');
    return (
        <div>
            <InnerPageBanner
                title="Our Clients"
                subtitle="Trusted by Leading Brands – Explore Our Diverse Clientele and Discover How We Help Businesses Achieve Success with Tailored Digital Solutions."
                imageSrc="/src/assets/images/clients-right-image.png"
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