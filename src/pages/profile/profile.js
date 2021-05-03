import { faCalendar, faDotCircle, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGlobeAmericas, faMapMarkedAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import Navbar from '../../components/navbar'
import AOS from 'aos' 
import photo from '../../assets/images/background.jpeg'

import "aos/dist/aos.css"
import './profile.css'
import '../../components/container2.css'
import '../../components/scrollbar.css'

class Profile extends Component {
    state = {
        aboutMe: [
            {icon: faUser, title: 'Name', content: 'Muhammad Rido'},
            {icon: faCalendar, title: 'Day of Birth', content: 'November, 10th 1995'},
            {icon: faEnvelope, title: 'Email', content: 'muhammadrido19@gmail.com'},
            {icon: faGlobeAmericas, title: 'Web', content: 'mrido10.github.io'},
            {icon: faMapMarkedAlt, title: 'Address', content: 'Tangerang Selatan, Indonesia'},
        ],
        formalEdu: [
            {year: '2019', school: 'Universitas Jambi, (S1) Program Studi Fisika'},
            {year: '2014', school: 'SMAN 3 Merangin'},
            {year: '2011', school: 'SMPN 23 Merangin'},
            {year: '2008', school: 'SDN 249 / VI Rawa Jaya I'},
            {year: '2002'},
        ],
        inFormalEdu: [
            {year: 'March 2020 - May 2020', school: 'G2Academy (Fullstack Programmer Bootcamp)'}
        ]
    }

    showAboutMe = val => {
        return (
            <div className='aboutMe'>
                <FontAwesomeIcon icon={val.icon} data-aos='fade-up' />
                {/* <div className='titleContent'>{val.title}</div> */}
                <div className='content' data-aos='fade-up'>{val.content}</div>
            </div>
        )
    }

    showFormalEducation = (val, idx) => {
        if (idx === this.state.formalEdu.length - 1) {
            return(
                <>
                    <div className='empty'></div>
                    <div className='point'><FontAwesomeIcon icon={faDotCircle} /></div>
                    <div className='year'>{val.year}</div>           
                </>
            )
        }
        return(
            <>
                <div className='empty'></div>
                <div className='point'><FontAwesomeIcon icon={faDotCircle} /></div>
                <div className='year'>{val.year}</div>
                <div className='school'>{val.school}</div>
                <div className='line'><div></div></div>
                <div className='empty'></div>                
            </>
        )
    }

    showInformalEducation = val => {
        return (
            <>
                <div className='school'>{val.school}</div>
                <div className='point'><FontAwesomeIcon icon={faDotCircle} /></div>
                <div className='year'>{val.year}</div>
            </>
        )
    }

    componentDidMount = () => {
        AOS.init({
            duration : 1000
        })
        AOS.refresh()
    }

    render () {
        return(
            <div id='container2'>
                <Navbar />
                <div className='containerContent abt' data-aos='fade' data-aos-delay="300">
                    <div className='contentBox aboutMeBox'>
                        <div className='photo'>
                            <img src={photo} />
                        </div>
                        <div className='titleBox left'>
                            <h2 className='title' data-aos='fade-right'>About</h2>
                            <h2 className='title' data-aos='fade-right'>Me</h2>
                        </div>
                        <div className='contentBox2'>
                            {
                                this.state.aboutMe.map((val) => {
                                    return this.showAboutMe(val)
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='containerContent edu' data-aos="fade">
                    <div className='contentBox eduBox'>
                        <div className='contentBox2'>
                            <div className='subtitle formal'>
                                <h3 className='formalEdu'>Formal</h3>
                                <div className='line'>
                                    <div className='lineStretch'></div>
                                </div>
                                <div className='line'>
                                    <div className='boxRounded'></div>
                                </div>
                            </div>
                            <div className='contentBox3 formalEdu'>
                                {
                                    this.state.formalEdu.map( (val, idx) => {
                                        return this.showFormalEducation(val, idx)
                                    })
                                }
                            </div>
                            
                            <div className='subtitle in'>
                                <h3 className='informalEdu'>In Formal</h3>
                                <div className='line'>
                                    <div className='lineStretch'></div>
                                </div>
                                <div className='line'>
                                    <div className='boxRounded'></div>
                                </div>
                            </div>
                            <div className='contentBox3 informalEdu'>
                                {
                                    this.state.inFormalEdu.map( val => {
                                        return this.showInformalEducation(val)
                                    })
                                }
                            </div>
                        </div>
                        <div className='titleBox right'>
                            <h2 className='title'>My</h2>
                            <h2 className='title'>Education</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile