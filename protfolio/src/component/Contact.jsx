import "./Contact.css";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {

    return (

        <section className="contact" id="contact">

            <div className="contact-title">

                <h5>CONTACT</h5>

                <h1>Let's Work Together</h1>

                <p>
                    I'm currently looking for internship and
                    full-time opportunities. Feel free to contact me.
                </p>

            </div>

            <div className="contact-container">

                {/* Left Side */}

                <div className="contact-left">

                    <div className="info-card">

                        <FaEnvelope />

                        <div>

                            <h3>Email</h3>

                            <p>nayaksubrata256@gmail.com</p>

                        </div>

                    </div>

                    <div className="info-card">

                        <FaPhoneAlt />

                        <div>

                            <h3>Phone</h3>

                            <p>+91 93375 63032</p>

                        </div>

                    </div>

                    <div className="info-card">

                        <FaMapMarkerAlt />

                        <div>

                            <h3>Location</h3>

                            <p>Odisha, India</p>

                        </div>

                    </div>

                    <div className="social-icons">

                        <a href="https://github.com/Subrat37" target="_blank" rel="noreferrer">

                            <FaGithub />

                        </a>

                        <a href="https://www.linkedin.com/in/subrat-nayak-91661232a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">

                            <FaLinkedin />

                        </a>

                    </div>

                </div>

                {/* Right Side */}

                <form className="contact-form">

                    <input
                        type="text"
                        placeholder="Your Name"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                    />

                    <input
                        type="text"
                        placeholder="Subject"
                    />

                    <textarea
                        rows="6"
                        placeholder="Your Message"
                    ></textarea>

                    <button>

                        Send Message

                    </button>

                </form>

            </div>

        </section>

    );

}

export default Contact;