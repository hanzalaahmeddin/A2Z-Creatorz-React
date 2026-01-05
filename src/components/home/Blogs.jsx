import React from 'react';

function Blogs() {
    const blogs = [
        {
            id: 1,
            title: 'The Future of Web Development',
            excerpt: 'Explore the latest trends in web development, from AI integration to progressive web apps.',
            image: '/src/assets/images/web.png',
            date: 'December 2023'
        },
        {
            id: 2,
            title: 'Mobile App Trends for 2024',
            excerpt: 'Discover what\'s new in mobile app development and how to stay ahead of the curve.',
            image: '/src/assets/images/mobile.png',
            date: 'November 2023'
        },
        {
            id: 3,
            title: 'Digital Marketing Strategies',
            excerpt: 'Effective digital marketing tactics to boost your online presence and engagement.',
            image: '/src/assets/images/a2z-logo-white.png',
            date: 'October 2023'
        }
    ];

    return (
        <section className="py-5 blogs">
            <div className="container">
                <h2 className="text-center mb-5">Latest Blogs</h2>
                <div className="row g-4">
                    {blogs.map(blog => (
                        <div key={blog.id} className="col-lg-4 col-md-6">
                            <div className="card h-100 shadow-sm">
                                <img src={blog.image} className="card-img-top" alt={blog.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{blog.title}</h5>
                                    <p className="card-text">{blog.excerpt}</p>
                                    <p className="text-muted small">{blog.date}</p>
                                    <a href="#" className="btn btn-outline-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blogs;