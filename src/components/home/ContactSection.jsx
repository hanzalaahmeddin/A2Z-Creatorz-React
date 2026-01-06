import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "../ContactForm";
import "./Contact.css";
import ContactMap from "../ContactMap";

const ContactSection = () => {
    return (
        <section className="contact-section py-5">
            <div className="container">
                <div className="row align-items-center">


                    {/* LEFT - FORM */}

                    <div className="col-lg-8">
                        <h2 className="sub-main-title fade-in-delay-1 mb-4">contact us</h2>
                        <ContactMap/>
                        <div className="row mt-3">
                            <div className="col-md-4"><div className="contact-info-item">
                                    <FaEnvelope/>
                                <div>
                                    <h5>Reach Out Anytime</h5>
                                    <p>Our experts are ready to assist</p>
                                    <a href="mailto:info@a2zcreatorz.com">
                                        info@a2zcreatorz.com
                                    </a>
                                </div>
                            </div></div>
                            <div className="col-md-4">
                                <div className="contact-info-item">
                                <FaPhoneAlt />
                                <div>
                                    <h5>Call us</h5>
                                    <p>Our team is available around the clock—call us 24/7</p>
                                    <a href="tel:+922135385205">+92-21-35385205 (07)</a>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4">
                                 <div className="contact-info-item">
                                <FaMapMarkerAlt />
                                <div>
                                    <h5>Address</h5>
                                    <p>
                                        64-C, 2nd Floor, 21st Commercial Street Phase II Ext.
                                        <br />
                                        DHA, Karachi, Pakistan.
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="contact-info-box">

                            

                            

                           
                            

                        </div>
                        
                    </div>
                    {/* RIGHT - CONTACT INFO */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <ContactForm title="Let's Propel Your Vision Forward" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
