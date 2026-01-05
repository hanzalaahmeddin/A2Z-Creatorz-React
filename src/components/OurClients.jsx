import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./OurClients.css";

const clientsData = [
    {
        country: "Pakistan",
        flag: "src/assets/images/flags/Pakistan.png",
        clients: [
            "/logos/pk1.png",
            "/logos/pk2.png",
            "/logos/pk3.png",
            "/logos/pk4.png",
        ],
    },
    {
        country: "Qatar",
        flag: "/flags/qatar.png",
        clients: [
            "/logos/qa1.png",
            "/logos/qa2.png",
            "/logos/qa3.png",
        ],
    },
    {
        country: "Australia",
        flag: "/flags/australia.png",
        clients: [
            "/logos/au1.png",
            "/logos/au2.png",
            "/logos/au3.png",
        ],
    },
    {
        country: "USA",
        flag: "/flags/usa.png",
        clients: [
            "/logos/us1.png",
            "/logos/us2.png",
            "/logos/us3.png",
        ],
    },
];

function OurClients() {
    return (
        <section className="clients-section">
            <div className="container">
                <h2 className="sub-main-title-black text-center">Our Clients</h2>
                <p className="clients-subtitle">Our clients span across 15+ countries, delivering exceptional results worldwide.</p>

                {/* OUTER CAROUSEL – COUNTRIES */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    className="countries-swiper"
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                    }}
                >
                    {clientsData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="country-card">

                                {/* COUNTRY HEADER */}
                                <div className="country-header">
                                    <img src={item.flag} alt={item.country} />
                                    <h4>{item.country}</h4>
                                </div>

                                {/* INNER CAROUSEL – CLIENT LOGOS */}
                                <Swiper
                                    modules={[Autoplay]}
                                    slidesPerView={1}
                                    loop={true}
                                    autoplay={{
                                        delay: 1600,
                                        disableOnInteraction: false,
                                    }}
                                    className="client-logo-swiper"
                                >
                                    {item.clients.map((logo, i) => (
                                        <SwiperSlide key={i}>
                                            <div className="logo-slide">
                                                <img src={logo} alt="Client Logo" />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default OurClients;
