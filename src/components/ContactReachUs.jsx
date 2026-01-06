import { useState } from "react";
import "../assets/css/contact-reach-us.css";

function ContactReachUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <section className="contact-reach-us">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 px-5">
                        <div className="letsTalkCard">
                            <h3 className="sub-main-title-black">Let’s talk!</h3>
                            <h2>Contact & Reach Us!</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="enter your name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="submit-btn">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src="/lets-connect.png" alt="Let's Connect" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactReachUs;