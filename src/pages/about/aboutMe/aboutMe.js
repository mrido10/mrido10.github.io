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
                    <p className='abtMe' data-aos='fade-right'>
                        Hi, My name is <strong><span className='blue'>Muhammad Rido</span></strong><br></br>
                        You can call me Rido, Ido, Edo, and anything<br></br>
                        <br></br>
                        I have experience as Fullstack and backend developer since 2020
                        at one of the companies that developed a Distribution Management System application<br></br>
                        <br></br>
                        Since know the programming, I've been interested in web development.
                        Now, i have skills and curently learning some skills for web development, like:
                        Golang, Java, Javascript (React Js), Database migration, Arduino, Databases (mySql, PostgeSQL, Elasticsearch), HTML5, CSS3, Bootstrap.
                        This I do to be the best in me, I do what I love, and I love what I do, with the best of my heart.
                    </p>
                    {/* <div className='abtMe'>
                        {
                            this.state.aboutMe.map((val, idx) => {
                                return this.showAbtMe(val, idx)
                            })
                        }
                    </div> */}
                    <div data-aos='fade-up' data-aos-duration='1700'><Link className='download' onClick={() => {window.open('file/Muhammad_Rido_CV.pdf')}}>Download CV</Link></div>
                </div>
            </section>
        )
    }
}

export default AboutMe