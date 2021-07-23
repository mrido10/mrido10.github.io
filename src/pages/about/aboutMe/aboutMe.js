import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import ProfileImg from '../../../assets/images/profile.jpeg'
import './aboutMe.css'

class AboutMe extends Component {
    state = {
        aboutMe: [
            {label: 'Name', content: 'Muhammad Rido'},
            {label: 'Birth Date', content: 'November, 10th 1995'},
            {label: 'Email', content: 'muhammadrido19@gmail.com'},
            {label: 'Web', content: 'mrido10.github.io'},
            {label: 'Address', content: 'Tangerang Selatan, Indonesia'},
        ]
    }

    showAbtMe = (val, idx) => {
        return (
            <div className='aboutMe' data-aos='fade-up' data-aos-duration={1500 + (idx + 3) * 100}>
                <span className='label'>{val.label}</span>
                <span className='cnt'>{val.content}</span>
            </div>
        )
    }

    componentDidMount() {
        let pAbout = document.querySelector('#aboutMeCont .abtContentCont p')
        let windowWidth = window.matchMedia("(max-width: 850px)")
        if (windowWidth.matches) {
            pAbout.setAttribute('data-aos', 'fade-up')
        } else {
            pAbout.setAttribute('data-aos', 'fade-right')
        }
        pAbout.setAttribute('data-aos-duration', '1700')
    }

    render() {
        return(
            <section id='aboutMeCont' className='cont1'>
                <div className='imgCont'>
                    <div className='imgCont2'>
                        <img src={ProfileImg} alt='This Pictures' data-aos='fade-up'></img>
                        <div className='imgFrame' data-aos='fade-up'></div>
                    </div>
                </div>
                <div className='abtContentCont'>
                    <h2>ABOUT <span className='blue'>ME</span></h2>
                    <p className='abtMe' data-aos='fade-right'>"Experienced in IT field since 2020. Skilled in Java, Golang, Javascript (React Js), Arduino, Database (mySql), HTML5, CSS3"</p>
                    <div className='abtMe'>
                        {
                            this.state.aboutMe.map((val, idx) => {
                                return this.showAbtMe(val, idx)
                            })
                        }
                    </div>
                    <div data-aos='fade-up' data-aos-duration='1700'><Link className='download' onClick={() => {window.open('file/Muhammad_Rido_CV.pdf')}}>Download CV</Link></div>
                </div>
            </section>
        )
    }
}

export default AboutMe