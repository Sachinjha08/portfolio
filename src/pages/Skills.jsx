import React from 'react';


const skills = [
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'React.js', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node' },
    { name: 'PHP', icon: 'fab fa-php' },
    { name: 'MongoDB', icon: 'fas fa-database' },
    { name: 'SQL', icon: 'fas fa-database' },
    { name: 'Express.js', icon: 'fas fa-server' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    { name: 'JSON', icon: 'fas fa-code' },
];

const Skills = () => {
    return (
        <div className="skills-section">
            <h1>My Skills</h1>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill">
                        <i className={`${skill.icon} skill-icon`}></i>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
