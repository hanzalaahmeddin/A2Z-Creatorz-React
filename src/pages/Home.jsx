import Hero from "../components/home/Hero";

import Services from "../components/home/Services";
import AboutUs from "../components/home/AboutUs";

import ContactForm from "../components/home/ContactForm";
import Blogs from "../components/home/Blogs";
import Testimonials from "../components/home/Testimonials";
import OurClients from "../components/home/OurClients";

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
