import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./OurClients.css";

// Flags
import pakistanFlag from '../../assets/images/flags/Pakistan.png';
import uaeFlag from '../../assets/images/flags/UAE.png';
import canadaFlag from '../../assets/images/flags/Canada.png';
import qatarFlag from '../../assets/images/flags/Qatar.png';
import australiaFlag from '../../assets/images/flags/Australia.png';
import usaFlag from '../../assets/images/flags/USA.png';
import ksaFlag from '../../assets/images/flags/KSA.png';
import omanFlag from '../../assets/images/flags/Oman.png';

// Client logos
import stateLifeLogo from '../../assets/images/clients/State-life.png';
import pspcLogo from '../../assets/images/clients/PSPC.png';
import housingRecostructionUnitLogo from '../../assets/images/clients/Housing-Recostruction-Unit.png';
import bhcipLogo from '../../assets/images/clients/BHCIP.png';
import braLogo from '../../assets/images/clients/B-R-A.png';
import futureLogo from '../../assets/images/clients/Future.png';
import hamdardLogo from '../../assets/images/clients/Hamdard.png';
import hbfcLogo from '../../assets/images/clients/HBFC.png';
import tdfLogo from '../../assets/images/clients/TDF.png';
import assetLinkerLogo from '../../assets/images/clients/Asset-Linker.png';
import alJaberOpticalLogo from '../../assets/images/clients/al-jaber-optical.png';
import vivelLogo from '../../assets/images/clients/VIVEL.png';
import wataniyaFinanceLogo from '../../assets/images/clients/Wataniya-Finance-.png';
import zillionLogo from '../../assets/images/clients/zillion.png';
import zogaLogo from '../../assets/images/clients/zoga.png';
import crUniqueLogo from '../../assets/images/clients/cr-unique.jpg';
import quickzLaundryLogo from '../../assets/images/clients/Quickz-Laundry.png';
import a2zLogo from '../../assets/images/clients/a2z.png';
import dimensoinLogo from '../../assets/images/clients/Dimensoin.png';
import htxSteelsLogo from '../../assets/images/clients/HTX-Steels.png';
import illAustraliaLogo from '../../assets/images/clients/ill-Australia.png';
import dietCenterLogo from '../../assets/images/clients/Diet-Center.png';
import eizoLogo from '../../assets/images/clients/Eizo.png';
import happyHomeLogo from '../../assets/images/clients/Happy-Home.png';
import saadedeinLogo from '../../assets/images/clients/Saadedein.png';
import dosteenLogo from '../../assets/images/clients/dosteen.png';
import hawthornLogo from '../../assets/images/clients/hawthorn.png';
import alShaerCorpLogo from '../../assets/images/clients/Al-Shaer-corp.png';

const clientsData = [
    {
        country: "Pakistan",
        flag: pakistanFlag,
        clients: [
            stateLifeLogo,
            pspcLogo,
            housingRecostructionUnitLogo,
            bhcipLogo,
            braLogo,
            futureLogo,
            hamdardLogo,
            hbfcLogo,
            tdfLogo,
            assetLinkerLogo,

        ],
    },
    {
        country: "United Arab Emirates",
        flag: uaeFlag,
        clients: [
            alJaberOpticalLogo,
            vivelLogo,
            wataniyaFinanceLogo,
            zillionLogo,
            zogaLogo,
            crUniqueLogo,
        ],
    },
    {
        country: "Canada",
        flag: canadaFlag,
        clients: [
            quickzLaundryLogo,
            a2zLogo,
        ],
    },
    {
        country: "Qatar",
        flag: qatarFlag,
        clients: [
            dimensoinLogo,
            a2zLogo,
        ],
    },
    {
        country: "Australia",
        flag: australiaFlag,
        clients: [
            htxSteelsLogo,
            a2zLogo,
        ],
    },
    {
        country: "United States",
        flag: usaFlag,
        clients: [
            illAustraliaLogo,
            a2zLogo,
        ],
    },
    {
        country: "KSA",
        flag: ksaFlag,
        clients: [
            dietCenterLogo,
            eizoLogo,
            happyHomeLogo,
            saadedeinLogo,
        ],
    },
    {
        country: "Oman",
        flag: omanFlag,
        clients: [
            dosteenLogo,
            hawthornLogo,
            alShaerCorpLogo,
        ],
    },
];

function OurClients() {
    return (
        <section className="clients-section py-5">
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
