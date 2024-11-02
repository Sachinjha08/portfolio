import React from "react";
import { Link } from "react-router-dom"

const resume = "https://drive.google.com/file/d/17ultmX5IckVOzbjlp7isjfT55JfCfZaN/view?usp=drive_link"
const Home = () => (

    <div className="portfolio">
        <div className="background-image"></div>
        <div className="text-content">
            <h1>Welcome to My <span>Portfolio</span></h1>
            <h2>Myself Sachin Jha <span>Fullstack Devloper</span></h2>
            <p>We are team-thinkreactive freelancers and we are providing lots of services<br /> which is show in given below ...</p>
            <Link to={resume}>
                Download My Resume
            </Link>
        </div>
    </div>
);

export default Home;




