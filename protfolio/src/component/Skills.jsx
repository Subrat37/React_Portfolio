import { useState } from "react";
import "./Skills.css";
import skillData from "../data/skillData";

function Skills() {

    const categories = Object.keys(skillData);

    const [activeCategory, setActiveCategory] = useState("Backend");

    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (index) => {

        if (selectedCard === index) {

            setSelectedCard(null);

        } else {

            setSelectedCard(index);

        }

    };

    return (

        <section className="skills" id="skills">

            <h5>MY TECH STACK</h5>

            <h1>Skills & Technologies</h1>

            <p className="skill-subtitle">

                Technologies I use to build modern Full Stack applications.

            </p>

            {/* Category Buttons */}

            <div className="category-container">

                {

                    categories.map((category) => (

                        <button

                            key={category}

                            className={
                                activeCategory === category
                                    ? "category-btn active"
                                    : "category-btn"
                            }

                            onClick={() => {

                                setActiveCategory(category);

                                setSelectedCard(null);

                            }}

                        >

                            {category}

                        </button>

                    ))

                }

            </div>

            {/* Section Title */}

            <div className="section-heading">

                <h2>

                    {skillData[activeCategory].title}

                </h2>

                <p>

                    {skillData[activeCategory].description}

                </p>

            </div>

            {/* Cards */}

            <div className="cards-container">

                {

                    skillData[activeCategory].cards.map((card, index) => (

                        <div

                            key={index}

                            className={
                                selectedCard === index
                                    ? "skill-card open"
                                    : "skill-card"
                            }

                            onClick={() => handleCardClick(index)}

                        >

                            <div className="card-top">

                                <div className="emoji">

                                    {card.icon}

                                </div>

                                <div>

                                    <h3>

                                        {card.title}

                                    </h3>

                                    <span>

                                        {card.subtitle}

                                    </span>

                                </div>

                            </div>

                            <div className="learn-more">

                                Learn More →

                            </div>

                            {

                                selectedCard === index && (

                                    <div className="topics">

                                        {

                                            card.topics.map((topic, i) => (

                                                <p key={i}>

                                                    ✔ {topic}

                                                </p>

                                            ))

                                        }

                                    </div>

                                )

                            }

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default Skills;