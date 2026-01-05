import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WebDesignDevelopment from "./pages/WebDesignDevelopment";
import MobileApplication from "./pages/MobileApplication";
import Ecommerce from "./pages/Ecommerce";
import DigitalMarketing from "./pages/DigitalMarketing";
import UiUxDesign from "./pages/UiUxDesign";
import ItStaffOutsourcing from "./pages/ItStaffOutsourcing";
import WebDigitalSecurity from "./pages/WebDigitalSecurity";
import WebHosting from "./pages/WebHosting";
import Bitdefender from "./pages/Bitdefender";
import GoogleWorkspacePlans from "./pages/GoogleWorkspacePlans";
import Portfolio from "./pages/Portfolio";
import WebsitePortfolio from "./pages/WebsitePortfolio";
import EcommercePortfolio from "./pages/EcommercePortfolio";
import MobileApplicationPortfolio from "./pages/MobileApplicationPortfolio";
import DigitalMarketingPortfolio from "./pages/DigitalMarketingPortfolio";
import WebApplicationPortfolio from "./pages/WebApplicationPortfolio";
import NewsEvents from "./pages/NewsEvents";
import OurClients from "./pages/OurClients";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/web-design-development" element={<WebDesignDevelopment />} />
        <Route path="/services/mobile-application" element={<MobileApplication />} />
        <Route path="/services/ecommerce" element={<Ecommerce />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
        <Route path="/services/it-staff-outsourcing" element={<ItStaffOutsourcing />} />
        <Route path="/services/web-digital-security" element={<WebDigitalSecurity />} />
        <Route path="/services/web-hosting" element={<WebHosting />} />
        <Route path="/services/bitdefender" element={<Bitdefender />} />
        <Route path="/services/google-workspace-plans" element={<GoogleWorkspacePlans />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/website" element={<WebsitePortfolio />} />
        <Route path="/portfolio/ecommerce" element={<EcommercePortfolio />} />
        <Route path="/portfolio/mobile-application" element={<MobileApplicationPortfolio />} />
        <Route path="/portfolio/digital-marketing" element={<DigitalMarketingPortfolio />} />
        <Route path="/portfolio/web-application" element={<WebApplicationPortfolio />} />
        <Route path="/news-events" element={<NewsEvents />} />
        <Route path="/our-clients" element={<OurClients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/careers" element={<Careers />} />
      </Routes>

      <Footer />
      <FloatingButtons />
    </BrowserRouter>
  );
}

export default App;
