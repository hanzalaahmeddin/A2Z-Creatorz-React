import React from 'react';

function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            position: 'CEO, TechCorp',
            message: 'A2Z Creatorz delivered an outstanding website that exceeded our expectations. Their team is professional and innovative.',
            image: '/src/assets/images/a2z-logo-white.png' // Placeholder
        },
        {
            id: 2,
            name: 'Jane Smith',
            position: 'Founder, StartupXYZ',
            message: 'The mobile app they developed for us has been a game-changer. Highly recommend their services!',
            image: '/src/assets/images/a2z-logo-white.png'
        },
        {
            id: 3,
            name: 'Mike Johnson',
            position: 'Marketing Director, BrandInc',
            message: 'Their digital marketing strategies helped us grow our online presence significantly. Excellent results!',
            image: '/src/assets/images/a2z-logo-white.png'
        }
    ];

    return (
        <section className="py-5 bg-light testimonials">
            <div className="container">
                <h2 className="text-center mb-5">What Our Clients Say</h2>
                <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {testimonials.map((testimonial, index) => (
                            <div key={testimonial.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <div className="row justify-content-center">
                                    <div className="col-lg-8 text-center">
                                        <img src={testimonial.image} alt={testimonial.name} className="rounded-circle mb-3" style={{ width: '80px', height: '80px' }} />
                                        <blockquote className="blockquote">
                                            <p className="mb-3">"{testimonial.message}"</p>
                                            <footer className="blockquote-footer">
                                                {testimonial.name}, <cite title="Source Title">{testimonial.position}</cite>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;