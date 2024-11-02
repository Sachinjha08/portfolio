import React from 'react';

const About = () => {
    return (
        <div className="about-section">
            <h1>About Us </h1>
            <p>Resize the browser window to see that this page is responsive by the way.</p>
            <p>Resize the browser window to see that this page is responsive by the way.</p>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src="src\assets\image1.png" alt="Jane" style={{ width: '100%' }} />
                        <div className="container">
                            <h2>Asutosh Mandloi</h2>
                            <p className="title">Designer</p>
                            <p>Expert in Website Designing</p>
                            <p>asutoshmandloi.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="src\assets\image2.png" alt="Mike" style={{ width: '100%' }} />
                        <div className="container">
                            <h2>Palash Pidkewar</h2>
                            <p className="title">Devloper</p>
                            <p>Expert in Frontend Devlopment</p>
                            <p>palashpidkeware@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="src\assets\b.jpg" alt="John" style={{ width: '100%' }} />
                        <div className="container">
                            <h2>Sachin Jha</h2>
                            <p className="title">Designer and Devlopers</p>
                            <p>Expert in Website Devlopment and Designing</p>
                            <p>sjhasachin08@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
