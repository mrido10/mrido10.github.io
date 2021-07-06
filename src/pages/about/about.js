import React, { Component } from 'react'
import Navbar from '../../components/navbar'
import AboutMe from './aboutMe/aboutMe'
import Education from './education/education'
import Experience from './experience/experience'
import Skills from './skill/skills'
import Portofolio from './portofolio/portofolio'
import Contact from './contact/contact'
import Wave from '../../components/wave'
import './about.css'

class About extends Component {
    state = {
       
    }

    render () {
        return(
            <div id='container' className='about'>
                <Navbar />
                <AboutMe />
                <Education />
                <Experience />
                <Skills />
                <Portofolio />
                <Contact />
                <Wave />
            </div>
        )
    }
}

export default About