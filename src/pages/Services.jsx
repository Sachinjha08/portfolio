import React, { useRef } from 'react';

function Services() {
    const teamMembers = [
        { name: 'Sachin Jha', role: 'UI/UX Designing', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFab8S0ZioiQxv_0MwBlN1nFpsKEn-Y5KsXadaejRe7ztKxgTJM8r1VeTtJHP8t0Uu-pI&usqp=CAU', description: 'Specializes in Figma,Cnva,AdobeXd design.' },
        { name: 'Ashutosh Mandloi', role: 'Graphic Designing', image: 'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_77d7429c23569c5165fdc429d10c2644/canva.png', description: 'Specializes in Figma,Cnva,AdobeXd design.' },
        { name: 'Ashutosh Mandloi', role: 'React Devlopment', image: 'https://i.pinimg.com/originals/39/5e/97/395e979943c93c7cec3bd2eecdd07b87.png', description: 'Expert in ReactJS,HTML,CSS,JS' },
        { name: 'Sachin Jha', role: 'FrontEnd Devlopment', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZULgn7jR5IH6sCNm5PjEnH1xTaSLFJLmx8w&s', description: 'Expert in ReactJS,HTML,CSS,JS' },
        { name: 'Palash Pidkewar', role: 'NodeJS Devlopment', image: 'https://w7.pngwing.com/pngs/205/650/png-transparent-node-js-javascript-software-developer-express-js-computer-software-node-js-logo-nodejs-software-development.png', description: 'Expert in NodeJS,PhP' },
        { name: 'Sachin Jha', role: 'Backend Devlopment', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldLyQK6bHlSCx0GsRMy8hNGvI63dLIdwEyA&s', description: 'Expert in NodeJS,PhP' },
        { name: 'Yash Yadav', role: 'Human Resource', image: 'https://static.vecteezy.com/system/resources/previews/004/702/848/non_2x/abstract-letter-hr-logo-isolated-on-white-background-vector.jpg', description: 'Expert in Handling The Client' },
        // { name: 'Bob Brown', role: 'Human Resource', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFsrxo85TnrK6FE-dwSNDPrHVtaJayloE2Q&s', description: 'Ensures project timelines are met and manages team workflow.' }
    ];

    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollLeft -= 300;
    };

    const scrollRight = () => {
        sliderRef.current.scrollLeft += 300;
    };

    return (
        <section className="service-section">
            <h1>Our Services</h1>
            <div className="service-slider-container">
                <button className="scroll-button left" onClick={scrollLeft}>
                    &#8249;
                </button>
                <div className="service-slider" ref={sliderRef}>
                    {teamMembers.map((member, index) => (
                        <div className="service-card" key={index}>
                            <img src={member.image} alt={member.name} className="service-image" />
                            <h3>{member.name}</h3>
                            <p className="service-role">{member.role}</p>
                            <p className="service-description">{member.description}</p>
                        </div>
                    ))}
                </div>
                <button className="scroll-button right" onClick={scrollRight}>
                    &#8250;
                </button>
            </div>
        </section>
    );
}

export default Services;
