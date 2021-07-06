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

    showAbtMe = val => {
        return (
            <div className='aboutMe'>
                <span className='label'>{val.label}</span>
                <span className='cnt'>{val.content}</span>
            </div>
        )
    }

    render() {
        return(
            <section id='aboutMeCont' className='cont1'>
                <div className='imgCont'>
                    <div className='imgCont2'>
                        <img src={ProfileImg} alt='This Pictures'></img>
                        <div className='imgFrame'></div>
                    </div>
                </div>
                <div className='abtContentCont'>
                    <h2>ABOUT <span className='blue'>ME</span></h2>
                    <p className='abtMe'>"Experienced in IT field since 2020. Skilled in Java, Golang, Javascript (React Js), Arduino, Database (mySql), HTML5, CSS3"</p>
                    <div className='abtMe'>
                        {
                            this.state.aboutMe.map(val => {
                                return this.showAbtMe(val)
                            })
                        }
                    </div>
                    <Link className='download' onClick={() => {window.open('file/Muhammad_Rido_CV.pdf')}}>Download CV</Link>
                </div>
            </section>
        )
    }
}

export default AboutMe