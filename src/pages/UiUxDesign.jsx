import usePageTitle from '../hooks/usePageTitle';
import InnerPageBanner from "../components/InnerPageBanner";
import ContactReachUs from "../components/ContactReachUs";

import bannerImg from '../assets/images/service-ui-ux-right.png';

function UiUxDesign() {
    usePageTitle('UI/UX Design Services - A2Z Creatorz | User Interface & Experience Design');

    return (
        <div>
            <InnerPageBanner
                title="UI/UX Design"
                subtitle="Design intuitive user interfaces and experiences that delight users."
                imageSrc={bannerImg}
            />
            <section className="inner-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img className="img-fluid fade-in-delay-1" src={bannerImg} alt="A2Z Creatorz Image" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="testimonials-subtitle fade-in-delay-2 mb-4">Who Are We</h2>
                            <p className="fade-in-delay-2">
                                Design intuitive and engaging user interfaces and experiences that captivate your audience. Our design experts create user-centric solutions that enhance usability, accessibility, and overall satisfaction, ensuring your digital products stand out.
                            </p>
                        </div>
                    </div>

                </div>
                <ContactReachUs />
            </section>

        </div>
    );
}

export default UiUxDesign;