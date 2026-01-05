import React, { useEffect, useRef, useState } from 'react';

function AboutUs() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            /* Counter Animation */
            const counters = document.querySelectorAll(".counter");

            counters.forEach(counter => {
                const target = +counter.getAttribute("data-target");
                const increment = target / 100;
                let count = 0;

                const updateCount = () => {
                    if (count < target) {
                        count += increment;
                        counter.innerText = Math.ceil(count);
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCount();
            });

            /* Progress Bar Animation */
            const progressBars = document.querySelectorAll(".progress-fill");

            progressBars.forEach(bar => {
                const progress = bar.getAttribute("data-progress");
                bar.style.width = "0%";

                setTimeout(() => {
                    bar.style.width = progress + "%";
                }, 300);
            });
        }
    }, [isVisible]);


    return (
        <section ref={sectionRef} className={`py-5 bg-light about-us ${isVisible ? 'animate' : ''}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-center">
                        <img src="/src/assets/images/about-left-img.webp" alt="A2Z Creatorz About us" className={`img-fluid logo-hover ${isVisible ? 'fade-in' : ''}`} />
                    </div>
                    <div className="col-lg-6">
                        <h2 className={`sub-main-title ${isVisible ? 'fade-in-delay-1' : ''}`}>About Us</h2>
                        <h2 className={`mb-3 about-heading ${isVisible ? 'fade-in-delay-2' : ''}`}>Global Innovators Since 2007</h2>

                        <p className={`text-white ${isVisible ? 'fade-in-delay-3' : ''}`}>
                            A2Z Creatorz has been a trailblazer in global web services for over 17 years. Since its inception in June 2007, the company has spearheaded numerous national, international, and government-driven initiatives, delivering transformative results with unparalleled success.
                        </p>
                        <div className='d-flex gap-3'>
                            <a href="#services" className={`dg-btn ${isVisible ? 'fade-in-delay-4' : ''}`}>Get your free quote</a>
                            <a href="#services" className={`dg-btn ${isVisible ? 'fade-in-delay-4' : ''}`}>Learn More</a>
                        </div>


                    </div>
                </div>
                <div className="row align-items-center justify-content-center gap-5">
                    <div className="col-2 text-center">
                        <div className='d-flex align-items-center justify-content-center gap-2'>
                            <h3 className="counter" data-target="18">0</h3><span className='fs-2 text-white'>+</span>
                        </div>
                        <p className='text-white mb-0'>Years of Excellence</p>
                        <div className="custom-progress">
                            <div className="progress-fill orange" data-progress="75"></div>
                        </div>
                    </div>
                    <div className="col-2 text-center">
                        <div className='d-flex align-items-center justify-content-center gap-2'>
                            <h3 className="counter" data-target="1500">0</h3><span className='fs-2 text-white'>+</span>
                        </div>

                        <p className='text-white mb-0'>Successful Projects</p>
                        <div className="custom-progress">
                            <div className="progress-fill purple" data-progress="70"></div>
                        </div>
                    </div>
                    <div className="col-2 text-center">
                        <div className='d-flex align-items-center justify-content-center gap-2'>
                            <h3 className="counter" data-target="3000">0</h3><span className='fs-2 text-white'>+</span>
                        </div>
                        <p className='text-white mb-0'>Satisfied Clients</p>
                        <div className="custom-progress">
                            <div className="progress-fill green" data-progress="85"></div>
                        </div>
                    </div>
                    <div className="col-2 text-center">
                        <div className='d-flex align-items-center justify-content-center gap-2'>
                            <h3 className="counter" data-target="50">0</h3><span className='fs-2 text-white'>+</span>
                        </div>

                        <p className='text-white mb-0'>Ongoing Projects</p>
                        <div className="custom-progress">
                            <div className="progress-fill blue" data-progress="65"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;