import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";
import ContactSection from "../components/home/ContactSection";

import contactRightImg from '../assets/images/contact-right-image.png';

function Contact() {
    usePageTitle('Contact Us - A2Z Creatorz | Get in Touch');
    return (
        <div>
            <InnerPageBanner
                title="Contact Us"
                subtitle="Get in touch with us for your next project."
                imageSrc={contactRightImg}
            />
            <ContactSection />
        </div>
    );
}

export default Contact;