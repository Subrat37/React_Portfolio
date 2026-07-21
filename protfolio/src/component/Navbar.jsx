import "./Navbar.css";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

function Navbar() {

    const [menu, setMenu] = useState(false);

    const [scroll, setScroll] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 50) {

                setScroll(true);

            }

            else {

                setScroll(false);

            }

        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (

        <nav className={scroll ? "navbar active" : "navbar"}>

            <h2 className="logo">

                SN

            </h2>

            <ul className={menu ? "nav-links active" : "nav-links"}>

                <li>

                    <a href="#home">Home</a>

                </li>

                <li>

                    <a href="#about">About</a>

                </li>

                <li>

                    <a href="#skills">Skills</a>

                </li>

                <li>

                    <a href="#projects">Projects</a>

                </li>

                <li>

                    <a href="#contact">Contact</a>

                </li>

            </ul>

            <a
                href="https://drive.google.com/file/d/1x0u341MSUL5xQxQQ1J1qcBcoUur4H0_R/view?usp=drivesdk"
                download
                className="resume-btn"
            >
                <FaDownload />
                <span>Resume</span>
            </a>

            <div

                className="menu"

                onClick={() => setMenu(!menu)}

            >

                {

                    menu ?

                        <FaTimes />

                        :

                        <FaBars />

                }

            </div>

        </nav>

    )

}

export default Navbar;