import Hero from "../components/Hero";

import Services from "../components/Services";
import AboutUs from "../components/AboutUs";

import ContactForm from "../components/ContactForm";
import Blogs from "../components/Blogs";
import Testimonials from "../components/Testimonials";
import OurClients from "../components/OurClients";

function Home() {
    return (
        <>
            <Hero />
            <Services />
            <AboutUs />
            <OurClients />
            <Testimonials />
            <Blogs />
            <ContactForm />

        </>
    );
}

export default Home;
