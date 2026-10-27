import "./Project.css";

import book from "../assets/projects/bookmyshow.png";
import movie from "../assets/projects/movie.png";
import portfolio from "../assets/projects/portfolio.png";

import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function Projects() {

    const projects = [

        {
            number: "01",
            title: "BookMyShow Clone",
            image: book,
            description:
                "A responsive movie ticket booking application with authentication, movie listings and seat booking.",

            tech: [
                "React",
                "Spring Boot",
                "MySQL"
            ],

            live: "https://bookmyshow-fullstack-fronted.onrender.com",
            github: "https://github.com/Subrat37/bookmyshow-fullstack.git"
        },

        {
            number: "02",
            title: "Google Drive Clone",
            image: movie,
            description:
                "Developed a Google Drive-inspired cloud file storage application using Java, Spring Boot, and Microservices Architecture.",

            tech: [
                "Java",
                "Spring Boot",
                "REST API",
                "Microservices Architecture"
            ],

            live: "https://google-drive-clone-ui.onrender.com",
            github: "https://github.com/Subrat37/Google-Drive-Project.git"
        },

        {
            number: "03",
            title: "Developer Portfolio",
            image: portfolio,
            description:
                "Modern personal portfolio built using React with premium UI and responsive design.",

            tech: [
                "React",
                "CSS",
                "JavaScript"
            ],

            live: "https://subrat37.github.io/React_Portfolio/",
            github: "https://github.com/Subrat37/React_Portfolio.git"
        }

    ];

    return (

        <section className="projects" id="projects">

            <h5>MY WORK</h5>

            <h1>Featured Projects</h1>

            {

                projects.map((project, index) => (

                    <div

                        key={index}

                        className={`project ${index % 2 === 1 ? "reverse" : ""}`}

                    >

                        <div className="project-image">

                            <img
                                src={project.image}
                                alt={project.title}
                            />

                            <div className="image-overlay">

                                <span>

                                    Featured Project

                                </span>

                                <button>

                                    View Project →

                                </button>

                            </div>

                        </div>

                        <div className="project-info">

                            <span className="project-number">

                                {project.number}

                            </span>

                            <h2>

                                {project.title}

                            </h2>

                            <p>

                                {project.description}

                            </p>

                            <div className="tech">

                                {

                                    project.tech.map((item, i) => (

                                        <span key={i}>

                                            {item}

                                        </span>

                                    ))

                                }

                            </div>

                            <div className="buttons">

                                <a href={project.live}>

                                    <FaArrowUpRightFromSquare />

                                    Live Demo

                                </a>

                                <a href={project.github}>

                                    <FaGithub />

                                    GitHub

                                </a>

                            </div>

                        </div>

                    </div>

                ))

            }

        </section>

    );

}

export default Projects;