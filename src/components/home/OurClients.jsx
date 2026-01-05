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
            "src/assets/images/clients/State-life.png",
            "src/assets/images/clients/PSPC.png",
            "src/assets/images/clients/Housing-Recostruction-Unit.png",
            "src/assets/images/clients/BHCIP.png",
            "src/assets/images/clients/B-R-A.png",
            "src/assets/images/clients/Future.png",
            "src/assets/images/clients/Hamdard.png",
            "src/assets/images/clients/HBFC.png",
            "src/assets/images/clients/TDF.png",
            "src/assets/images/clients/Asset-Linker.png",

        ],
    },
    {
        country: "United Arab Emirates",
        flag: "src/assets/images/flags/UAE.png",
        clients: [
            "src/assets/images/clients/al-jaber-optical.png",
            "src/assets/images/clients/VIVEL.png",
            "src/assets/images/clients/Wataniya-Finance-.png",
            "src/assets/images/clients/zillion.png",
            "src/assets/images/clients/zoga.png",
            "src/assets/images/clients/cr-unique.jpg",
        ],
    },
    {
        country: "Canada",
        flag: "src/assets/images/flags/Canada.png",
        clients: [
            "src/assets/images/clients/Quickz-Laundry.png",
            "src/assets/images/clients/a2z.png",
        ],
    },
    {
        country: "Qatar",
        flag: "src/assets/images/flags/Qatar.png",
        clients: [
            "src/assets/images/clients/Dimensoin.png",
            "src/assets/images/clients/a2z.png",
        ],
    },
    {
        country: "Australia",
        flag: "src/assets/images/flags/Australia.png",
        clients: [
            "src/assets/images/clients/HTX-Steels.png",
            "src/assets/images/clients/a2z.png",
        ],
    },
    {
        country: "United States",
        flag: "src/assets/images/flags/USA.png",
        clients: [
            "src/assets/images/clients/ill-Australia.png",
            "src/assets/images/clients/a2z.png",
        ],
    },
    {
        country: "KSA",
        flag: "src/assets/images/flags/KSA.png",
        clients: [
            "src/assets/images/clients/Diet-Center.png",
            "src/assets/images/clients/Eizo.png.png",
            "src/assets/images/clients/Happy-Home.png",
            "src/assets/images/clients/Saadedein.png",
        ],
    },
    {
        country: "Oman",
        flag: "src/assets/images/flags/Oman.png",
        clients: [
            "src/assets/images/clients/dosteen.png",
            "src/assets/images/clients/hawthorn.png",
            "src/assets/images/clients/Al-Shaer-corp.png",
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
                                    <img className="flagsIcon" src={item.flag} alt={item.country} />
                                    <h4>{item.country}</h4>
                                </div>

                                {/* INNER CAROUSEL – CLIENT LOGOS */}
                                <Swiper
                                    modules={[Autoplay]}
                                    slidesPerView={2}
                                    loop={true}
                                    autoplay={{
                                        delay: 1000,
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
