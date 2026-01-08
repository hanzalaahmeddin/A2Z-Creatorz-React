import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/css/contact-reach-us.css";

function ContactReachUs() {
    
    return (
        <section className="contact-reach-us">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 px-5 ">
                        <div className="letsTalkCard">
                            <h3 className="sub-main-title-black fade-in-delay-1">Let’s talk!</h3>
                            <h2 className="testimonials-subtitle fade-in-delay-2 mb-4">Contact & Reach Us!</h2>
                            <p className="fade-in-delay-3 mb-5">We’re here to help you bring your digital ideas to life. Whether it’s web development, app solutions, or digital strategy, our team is ready to assist. Reach out today and let’s create something amazing together!</p>
                            <Link to="/contact" className="dg-btn fade-in-delay-1">Get in Touch</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid fade-in-delay-1" src="/lets-connect.png" alt="Let's Connect" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactReachUs;