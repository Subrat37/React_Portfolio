import "./Footer.css";

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaArrowUp
} from "react-icons/fa";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-content">

                <h1>

                    Subrat Nayak

                </h1>

                <p>

                    Java Full Stack Developer

                </p>

                <div className="footer-links">

                    <a href="#home">Home</a>

                    <a href="#about">About</a>

                    <a href="#skills">Skills</a>

                    <a href="#projects">Projects</a>

                    <a href="#contact">Contact</a>

                </div>

                <div className="footer-social">

                    <a href="https://github.com/Subrat37">

                        <FaGithub/>

                    </a>

                    <a href="https://www.linkedin.com/in/subrat-nayak-91661232a?utm_source=share_via&utm_content=profile&utm_medium=member_android">

                        <FaLinkedin/>

                    </a>

                    <a href="https://www.instagram.com/mr_subrat_37?igsh=cXFpNHdmNXdqNW9x">

                        <FaInstagram/>

                    </a>

                </div>

                <button

                    className="top"

                    onClick={()=>

                        window.scrollTo({

                            top:0,

                            behavior:"smooth"

                        })

                    }

                >

                    <FaArrowUp/>

                </button>

                <hr/>

                <h4>

                    © 2026 Subrat Nayak | All Rights Reserved

                </h4>

            </div>

        </footer>

    );

}

export default Footer;