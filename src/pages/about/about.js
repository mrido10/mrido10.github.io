import React, { Component } from 'react'
import Navbar from '../../components/navbar'
import AboutMe from './aboutMe/aboutMe'
import Education from './education/education'
import Experience from './experience/experience'
import Skills from './skill/skills'
import Portofolio from './portofolio/portofolio'
import Contact from './contact/contact'
import Wave from '../../components/wave'
import AOS from 'aos'
import 'aos/dist/aos.css';
import './about.css'

class About extends Component {
    componentDidMount() {
        let h2 = document.getElementsByTagName('h2')
        let windowWidth = window.matchMedia("(max-width: 850px)")
        for(let i = 0; i < h2.length; i++) {
            h2[i].setAttribute('data-aos', 'fade-up')
            if (i === 0) {
                if (!windowWidth.matches) h2[i].setAttribute('data-aos', 'fade-right')
            }
        }
        AOS.init({
            duration : 1300
        })
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