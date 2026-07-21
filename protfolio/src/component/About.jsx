import "./About.css";
import about from "../assets/images/profile.png";

import {
    FaJava,
    FaReact
} from "react-icons/fa";

import {
    SiSpringboot,
    SiMysql
} from "react-icons/si";

function About() {

    return (

        <section className="about" id="about">

            <div className="about-left">

                <div className="image-container">

                    <img
                        src={about}
                        alt=""
                    />

                </div>

            </div>

            <div className="about-right">

                <h5>

                    ABOUT ME

                </h5>

                <h1>
                    <span>
                        Java Full Stack
                        <br />
                        Developer

                    </span>

                </h1>

                <p>

                    Hello! I'm Subrat Nayak.

                    I'm passionate about developing modern,
                    responsive and scalable web applications
                    using Java, Spring Boot, React and MySQL.

                    I enjoy solving DSA problems and learning
                    new technologies every day.

                </p>
                <div className="stats">

                    <div className="stat-card">

                        <h1>10+</h1>

                        <p>Projects</p>

                    </div>

                    <div className="stat-card">

                        <h1>150+</h1>

                        <p>DSA Problems</p>

                    </div>

                    <div className="stat-card">

                        <h1>4+</h1>

                        <p>Technologies</p>

                    </div>

                </div>
                <div className="timeline">

                    <h2>

                        Journey

                    </h2>

                    <div className="timeline-item">

                        <div className="circle"></div>

                        <div className="content">

                            <h3>

                                2024

                            </h3>

                            <p>

                                Started B.Tech CSE(AIML) as a Latrel Entry Student

                            </p>

                        </div>

                    </div>

                    <div className="timeline-item">

                        <div className="circle"></div>

                        <div className="content">

                            <h3>

                                2024

                            </h3>

                            <p>

                                Learned Java & DSA

                            </p>

                        </div>

                    </div>

                    <div className="timeline-item">

                        <div className="circle"></div>

                        <div className="content">

                            <h3>

                                2025

                            </h3>

                            <p>

                                React + Spring Boot

                            </p>

                        </div>

                    </div>

                    <div className="timeline-item">

                        <div className="circle"></div>

                        <div className="content">

                            <h3>

                                2026

                            </h3>

                            <p>

                                Building Full Stack Projects

                            </p>

                        </div>

                    </div>

                </div>

                <div className="about-details">

                    <div>

                        <h3>Location</h3>

                        <p>Odisha, India</p>

                    </div>

                    <div>

                        <h3>Education</h3>

                        <p>B.Tech CSE</p>

                    </div>

                    <div>

                        <h3>Experience</h3>

                        <p>Fresher</p>

                    </div>

                    <div>

                        <h3>Available</h3>

                        <p>Open To Work</p>

                    </div>

                </div>

                <div className="tech-icons">

                    <FaJava />

                    <FaReact />

                    <SiSpringboot />

                    <SiMysql />

                </div>

                <a
                    href="https://drive.google.com/file/d/1x0u341MSUL5xQxQQ1J1qcBcoUur4H0_R/view?usp=drivesdk"
                    download="Subrata_Nayak_Resume.pdf"
                    className="download-btn"
                >

                    Download Resume

                </a>

            </div>

        </section>

    )

}

export default About;