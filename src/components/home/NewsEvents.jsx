import React from "react";
import "./NewsEvents.css";

import thumbnail01 from '../../assets/images/blog/thumbnail-01.jpg';
import thumbnail02 from '../../assets/images/blog/thumbnail-02.jpg';

const NewsEvents = () => {
    return (
        <section className="news-events-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="sub-main-title fade-in-delay-1 text-center mb-5">News & Events</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <h4 className="news-subtitle fade-in-delay-2">Stay Ahead with <span className="fw-bold">Our Updates</span></h4>
                        <p className="fade-in-delay-3 mb-5">
                            Discover the latest milestones, groundbreaking projects, and
                            industry trends in our News & Events section. Stay connected to
                            explore our innovations, transformative achievements, and
                            upcoming initiatives shaping the future of the digital landscape.
                        </p>
                        <button className="dg-btn fade-in-delay-4">
                            Get your free quote
                        </button>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid fade-in-delay-2" src={thumbnail01} alt="News 1" />
                        <h5 className="fade-in-delay-3 mt-3">A2Z Creatorz participated at 26th ITCN Asia 2025 – Pavilion of Innovation.</h5>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid fade-in-delay-2" src={thumbnail02} alt="News 1" />
                        <h5 className="fade-in-delay-3 mt-3">A2Z Creatorz participated at LEAP 2025 – Booth I150 (A-11) in Riyadh</h5>
                    </div>
                    
                </div>
                
            </div>
        </section>
    );
};

export default NewsEvents;
