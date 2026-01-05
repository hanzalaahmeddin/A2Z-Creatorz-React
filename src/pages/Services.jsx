import InnerPageBanner from "../components/InnerPageBanner";
import ContactReachUs from "../components/ContactReachUs";

function Services() {
  return (
    <div>
      <InnerPageBanner
        title="Our Services"
        subtitle="Explore our comprehensive range of digital services designed to elevate your business."
        imageSrc="/service-bg.webp"
      />
      <section className="py-5">
        <div className="container">
          <h2>Our Services</h2>
          <p>Website Development, Mobile Apps, Digital Marketing</p>
        </div>
      </section>
      <ContactReachUs />
    </div>
  );
}

export default Services;
