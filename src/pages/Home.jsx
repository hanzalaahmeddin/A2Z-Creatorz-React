import Hero from "../components/home/Hero";

import Services from "../components/home/Services";
import AboutUs from "../components/home/AboutUs";

import ContactForm from "../components/home/ContactSection";

import Testimonials from "../components/home/Testimonials";
import OurClients from "../components/home/OurClients";
import OurPortfolio from "../components/home/OurPortfolio";
import NewsEvents from "../components/home/NewsEvents";
import ContactSection from "../components/home/ContactSection";

function Home() {
    return (
        <>
            <Hero />
            <Services />
            <AboutUs />
            <OurClients />
            <OurPortfolio />
            <NewsEvents />
            <Testimonials />
            <ContactSection />

        </>
    );
}

export default Home;
