import React from "react";

const ContactForm = ({ title }) => {
    return (
        <div className="contact-form-wrapper">
            {title && <h4 className="form-title">{title}</h4>}

            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone Number" required />

                <select required>
                    <option value="">Select Service</option>
                    <option>Web Design & Development</option>
                    <option>SEO & Marketing</option>
                    <option>Mobile App Development</option>
                    <option>Branding & Identity</option>
                </select>

                <textarea placeholder="Your Message" rows="4" required></textarea>

                <button type="submit" className="dg-btn">
                    Submit Request
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
