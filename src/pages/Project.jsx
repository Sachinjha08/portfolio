import React, { useRef } from 'react';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';

function Project() {
    const projectList = [
        {
            title: 'Office Blog App',
            description: 'Office blog app for sharing updates, articles, and team insights.',
            image: image3,
        },
        {
            title: 'Universal blogger app',
            description: 'Universal blogger app for sharing posts, engaging readers, and fostering community.',
            image: image5,
        },
        {
            title: 'Restaurant reservation system',
            description: 'Restaurant reservation system for booking tables, managing schedules, and availability.',
            image: image4,
        },
        {
            title: 'E-commerce website',
            description: 'E-commerce website for seamless shopping, product browsing, and secure checkout.',
            image: image6,
        },
        {
            title: 'Cloth Store Website UI',
            description: 'Cloth store website UI for trendy shopping, stylish designs, easy navigation.',
            image: image7,
        },
        {
            title: 'Food Order App UI',
            description: 'Food order app UI for browsing menus, quick ordering, and delivery tracking.',
            image: image8,
        }
    ];

    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollLeft -= 300; // Adjust this value for scroll amount
    };

    const scrollRight = () => {
        sliderRef.current.scrollLeft += 300; // Adjust this value for scroll amount
    };

    return (
        <section className="projects-section">
            <h1>My Projects</h1>
            <div className="projects-slider-container">
                <button className="scroll-button left" onClick={scrollLeft}>
                    &#8249; {/* Left arrow icon */}
                </button>
                <div className="projects-slider" ref={sliderRef}>
                    {projectList.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img src={project.image} alt={project.title} className="project-image" />
                            <h2>{project.title}</h2>
                            <p className="project-description">{project.description}</p>
                        </div>
                    ))}
                </div>
                <button className="scroll-button right" onClick={scrollRight}>
                    &#8250; {/* Right arrow icon */}
                </button>
            </div>
        </section>
    );
}

export default Project;
