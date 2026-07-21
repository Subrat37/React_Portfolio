import "./WhyHireMe.css";
import { useState } from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import whyHireData from "../data/whyHireData";

function WhyHireMe() {

    const [activeCard, setActiveCard] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    const active = whyHireData[activeCard];

    return (

        <section className="why" id="why">

            {/* Header */}

            <div className="why-header">

                <h5>WHY HIRE ME</h5>

                <h1>What Makes Me Different?</h1>

                <p>
                    Beyond technical skills, I focus on writing clean code,
                    solving problems and continuously improving myself.
                </p>

            </div>

            {/* Cards */}

            <div className="why-grid">

                {

                    whyHireData.map((item, index) => (

                        <div
                            key={item.id}
                            className={
                                activeCard === index
                                    ? "mini-card active"
                                    : "mini-card"
                            }
                        >

                            <div className="mini-icon">

                                {item.icon}

                            </div>

                            <h3>

                                {item.title}

                            </h3>

                            <p>

                                {item.short}

                            </p>

                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();

                                    setActiveCard(index);
                                    setShowDetails(true);
                                }}
                            >
                                Learn More
                                <FaArrowRight />
                            </button>

                        </div>

                    ))

                }

            </div>

            {/* Detail Panel */}

            {

                showDetails && (

                    <div className="detail-panel">

                        <div className="detail-left">

                            <div className="big-icon">

                                {active.icon}

                            </div>

                            <div>

                                <h2>

                                    {active.title}

                                </h2>

                                <p>

                                    {active.description}

                                </p>

                            </div>

                        </div>

                        <div className="detail-right">

                            <h4>

                                Highlights

                                <FaChevronDown />

                            </h4>

                            <div className="points">

                                {

                                    active.points.map((point, index) => (

                                        <div
                                            key={index}
                                            className="point"
                                        >

                                            <span></span>

                                            <p>

                                                {point}

                                            </p>

                                        </div>

                                    ))

                                }

                            </div>

                        </div>

                    </div>

                )

            }

        </section>

    );

}

export default WhyHireMe;