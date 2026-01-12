import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ title }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "", phone: "", service: "", message: "" });

    const publicKey = "your_public_key";

    useEffect(() => {
        emailjs.init(publicKey);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        let tempErrors = { name: "", email: "", phone: "", service: "", message: "" };
        if (!formData.name.trim()) tempErrors.name = "Please enter your full name.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) tempErrors.email = "Please enter a valid email address.";
        if (!formData.phone.trim()) tempErrors.phone = "Please enter your phone number.";
        if (!formData.service) tempErrors.service = "Please select a service.";
        if (!formData.message.trim()) tempErrors.message = "Please enter your message.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (!validate()) return;

        // EmailJS configuration - Replace with your actual IDs
        const serviceId = "your_service_id";
        const adminTemplateId = "your_admin_template_id";

        try {
            // Send email to admin
            await emailjs.send(
                serviceId,
                adminTemplateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    service: formData.service,
                    message: formData.message,
                    to_email: "hanzala@a2zcreatorz.com"
                },
                publicKey
            );

            setIsSubmitted(true);
        } catch (err) {
            setError("Failed to send message. Please try again.");
            console.error("EmailJS error:", err);
        }
    };

    return (
        <div className="contact-form-wrapper">
            {title && <h4 className="form-title">{title}</h4>}

            {isSubmitted ? (
                <div className="thank-you-message">
                    <h5>Thank You!</h5>
                    <p>Thank you for contacting us! We have received your message and will get back to you soon.</p>
                </div>
            ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <p className="field-error">{errors.name}</p>}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p className="field-error">{errors.email}</p>}
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    {errors.phone && <p className="field-error">{errors.phone}</p>}

                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Service</option>
                        <option>Web Design & Development</option>
                        <option>SEO & Marketing</option>
                        <option>Mobile App Development</option>
                        <option>Branding & Identity</option>
                    </select>
                    {errors.service && <p className="field-error">{errors.service}</p>}

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    {errors.message && <p className="field-error">{errors.message}</p>}

                    {error && <p className="error-message">{error}</p>}

                    <button type="submit" className="dg-btn">
                        Submit Request
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
