import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";
import ContactReachUs from "../components/ContactReachUs";
import ToolsSection from "../components/ToolsSection";

import itStaffAugImg from '../assets/images/IT-Staff-Augmentation.png';
import a2zAboutImg from '../assets/images/a2z-about-image-1.webp';

function ItStaffOutsourcing() {
    usePageTitle('IT Staff Outsourcing - A2Z Creatorz | Skilled IT Professionals');
    const tools = [
        { name: 'Jira', image: '/src/assets/images/jira.png' },
        { name: 'Slack', image: '/src/assets/images/slack.png' },
        { name: 'Trello', image: '/src/assets/images/trello.png' },
        { name: 'Git', image: '/src/assets/images/git.png' },
        { name: 'Docker', image: '/src/assets/images/docker.png' },
        { name: 'AWS', image: '/src/assets/images/aws.png' }
    ];

    return (
        <div>
            <InnerPageBanner
                title="IT Staff Outsourcing"
                subtitle="Access skilled IT professionals to support your projects and operations."
                imageSrc={itStaffAugImg}
            />
            <section className="inner-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img className="img-fluid fade-in-delay-1" src={a2zAboutImg} alt="A2Z Creatorz Image" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="testimonials-subtitle fade-in-delay-2 mb-4">Who Are We</h2>
                            <p className="fade-in-delay-2">
                                Access a pool of skilled IT professionals to augment your team and accelerate project delivery. Our outsourcing solutions provide flexible, cost-effective staffing options tailored to your specific technology needs and project requirements.
                            </p>
                        </div>
                    </div>
                    <ToolsSection tools={tools} />

                </div>
                <ContactReachUs />
            </section>

        </div>
    );
}

export default ItStaffOutsourcing;