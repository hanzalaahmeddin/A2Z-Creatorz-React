import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";
import ServicesComponent from "../components/home/Services";
import ContactReachUs from "../components/ContactReachUs";

function Services() {
    usePageTitle('Our Services - A2Z Creatorz | Web Design, Mobile Apps, Digital Marketing');
  return (
    <div>
      <InnerPageBanner
        title="Our Services"
        subtitle="Explore our comprehensive range of digital services designed to elevate your business."
        imageSrc="/src/assets/images/service-right-image.png"
      />
      <ServicesComponent />
      <ContactReachUs />
    </div>
  );
}

export default Services;
