import "./Hero.css";
import profile from "../assets/images/profile.png";
import intro from "../assets/videos/intro.mp4";
import { useEffect, useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import {
    FaJava,
    FaReact,
    FaGithub
} from "react-icons/fa";

import {
    SiSpringboot,
    SiMysql
} from "react-icons/si";

function Hero() {

    const roles = [
        "Java Full Stack Developer",
        "React Developer",
        "Spring Boot Developer",
        "Problem Solver"
    ];

    const [index, setIndex] = useState(0);
    const [hover, setHover] = useState(false);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const hideTimer = useRef(null);
    const [muted, setMuted] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {

        const interval = setInterval(() => {

            setIndex((prev) => (prev + 1) % roles.length);

        }, 2500);

        return () => clearInterval(interval);

    }, []);

    useEffect(() => {

        const move = (e) => {

            setMouse({

                x: e.clientX,
                y: e.clientY

            });

        };

        window.addEventListener("mousemove", move);

        return () => window.removeEventListener("mousemove", move);

    }, []);

    const showVideo = () => {

        clearTimeout(hideTimer.current);

        setHover(true);

    };

    const hideVideo = () => {

        hideTimer.current = setTimeout(() => {

            setHover(false);

        }, 200);

    };

    return (

        <section className="hero" id="home">

            <div
                className="mouse-glow"
                style={{
                    left: mouse.x - 150,
                    top: mouse.y - 150
                }}
            ></div>

            <div className="glow one"></div>
            <div className="glow two"></div>

            <div className="stars">

                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

            </div>
            <div className="floating-icons">

                <FaJava className="icon java" />

                <FaReact className="icon react" />

                <SiSpringboot className="icon spring" />

                <SiMysql className="icon mysql" />

                <FaGithub className="icon github" />

            </div>


            <div className="hero-left">

                <h4>Hello I'm</h4>

                <h1>

                    <span
                        className="hover-name"
                        onMouseEnter={showVideo}
                        onMouseLeave={hideVideo}
                    >
                        SUBRAT
                    </span>

                    <br />

                    <span
                        className="hover-name"
                        onMouseEnter={showVideo}
                        onMouseLeave={hideVideo}
                    >
                        NAYAK
                    </span>

                </h1>

                <div className="typing-container">

                    <span className="typing">

                        {roles[index]}

                    </span>

                </div>
                <p className="dot-text">Engineer across Java, Web, AI, and Cloud Systems</p>

                <p>
                    Passionate Java Full Stack Developer
                    creating modern and scalable web
                    applications using Java, Spring Boot,
                    React and MySQL.
                </p>

                <a href="#contact" className="contact-btn">
                    Get In Touch <FaArrowRight />
                </a>

            </div>

            <div className="hero-right">

                <div className="image-box">

                    <img
                        src={profile}
                        className="profile"
                        alt=""
                    />

                </div>

                <div className={hover ? "video-popup show" : "video-popup"}
                    onMouseEnter={showVideo}
                    onMouseLeave={hideVideo}>

                    <video
                        ref={videoRef}
                        autoPlay
                        muted={muted}
                        loop
                        playsInline
                    >

                        <source
                            src={intro}
                            type="video/mp4"
                        />

                    </video>
                    <button
                        className="sound-btn"
                        onClick={() => {
                            setMuted(!muted);

                            if (videoRef.current) {
                                videoRef.current.muted = !muted;
                            }
                        }}
                    >
                        {muted ? <FaVolumeMute /> : <FaVolumeUp />}
                    </button>

                </div>

            </div>

            <div className="scroll">

                <span></span>

            </div>
        </section>

    );

}

export default Hero;