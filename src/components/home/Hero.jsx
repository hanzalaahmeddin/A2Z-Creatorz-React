import webImg from "../../assets/images/web.png";
import mobileImg from "../../assets/images/mobile.png";

function Hero() {
    return (
        <section className="hero-section text-white">
            <div className="container text-center">

                {/* MAIN HEADING */}
                <h1 className="hero-main-title display-2">
                    Shaping the Future, Today
                </h1>

                {/* SLIDER */}
                <div
                    id="heroSlider"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="4000"
                    data-bs-pause="true"
                >
                    <div className="carousel-inner">

                        {/* SLIDE 1 */}
                        <div className="carousel-item active">
                            <div className="d-flex flex-column align-items-center">
                                <div className="text-center mb-4">
                                    <h2 className="hero-slide-title text-center">
                                        From concept to reality: Your Vision, Our Expertise
                                    </h2>

                                    <p className="hero-slide-text mt-3 text-center">
                                        Our team builds websites that captivate and engage.
                                        Let’s design a platform that reflects your brand,
                                        elevates user experience, and turns visitors into
                                        loyal customers. Start your digital journey with a
                                        powerful website!
                                    </p>


                                </div>
                                <div className="hero-image-wrapper">
                                    <img
                                        src={webImg}
                                        alt="Website Development"
                                        className="hero-img"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* SLIDE 2 */}
                        <div className="carousel-item">
                            <div className="d-flex flex-column align-items-center">
                                <div className="text-center mb-4">
                                    <h2 className="hero-slide-title text-center">
                                        Bring Your App Vision to Life
                                    </h2>

                                    <p className="hero-slide-text mt-3 text-center">
                                        Create a seamless mobile experience for your audience
                                        with our expert app developers. Whether it’s iOS or
                                        Android, we craft intuitive, high-performing apps
                                        that keep users coming back. Let’s shape your app
                                        idea into reality!
                                    </p>


                                </div>
                                <div className="hero-image-wrapper">
                                    <img
                                        src={mobileImg}
                                        alt="Mobile App Development"
                                        className="hero-img2"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;
