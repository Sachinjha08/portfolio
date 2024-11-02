import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Project from '../pages/Project'
import Contact from '../pages/Contact'
import Services from '../pages/Services'

const Main = () => {
    return (
        <div>
            <Home />
            <Services />
            <About />
            <Skills />
            <Project />
            <Contact />
        </div>
    )
}

export default Main