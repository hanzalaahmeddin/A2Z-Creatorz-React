import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./OurPortfolio.css";

const portfolioData = [
    {
        title: "Web Development",
        desc: "Crafting innovative, impactful, and personalized digital experiences that inspire, engage, and bring your vision to life.",
        img: "src/assets/images/portfolio-web.png",
    },
    {
        title: "Mobile Application",
        desc: "Delivering seamless and dynamic application solutions tailored to your needs.",
        img: "src/assets/images/portfolio-mobile.png",
    },
    {
        title: "Digital Marketing",
        desc: "Showcasing creativity and innovation through cutting-edge digital marketing solutions.",
        img: "src/assets/images/portfolio-digital.png",
    },

    {
        title: "E-Commerce",
        desc: "Building secure and scalable web portals to seamlessly empower your business.",
        img: "src/assets/images/portfolio-ecommerce.png",
    },
    

];

function OurPortfolio() {
    return (
        <section className="portfolio-portfolio-section portfolio-swiper-scope py-5">
            <div className="container">
                <h2 className="sub-main-title-black text-center fade-in-delay-1">Our Portfolio</h2>
                <p class="portfolio-subtitle text-center mb-5 fade-in-delay-2">
                    A showcase of our innovative digital solutions crafted for businesses worldwide.
                </p>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={3}
                    className="portfolio-swiper"
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                    }}
                >
                    {portfolioData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="portfolio-card fade-in-delay-1">
                                <div className="portfolio-img-wrap">
                                    <img src={item.img} alt={item.title} />
                                </div>

                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                                <button className="dg-btn">View More</button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default OurPortfolio;
