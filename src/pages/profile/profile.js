import { faCalendar, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGlobeAmericas, faMapMarkedAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import Navbar from '../../components/navbar'

import './profile.css'

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
            {year: '2014-2019', content: 'Universitas Jambi, (S1) Program Studi Fisika'},
            {year: '2011-2014', content: 'SMAN 3 Merangin'},
            {year: '2008-2011', content: 'SMPN 23 Merangin'},
        ],
        inFormalEdu: [
            {year: 'March 2020 - May 2020', content: 'G2Academy (Fullstack Programmer Bootcamp)'}
        ]
    }

    showAboutMe = val => {
        return (
            <div className='aboutMe'>
                <FontAwesomeIcon icon={val.icon} />
                {/* <div className='titleContent'>{val.title}</div> */}
                <div className='content'>{val.content}</div>
            </div>
        )
    }

    showEducationn = val => {
        return(
            <div className='contentBox3'>
                <div className='year'>{val.year}</div>
                <div className='lineBox'>
                    <div className='dot'></div>
                    <div className='line'></div>
                </div>
                <div className='education'>{val.content}</div>
            </div>
        )
    }

    render () {
        return(
            <div id='container2'>
                <Navbar />
                <div className='contentBox aboutMeBox'>
                    <div className='titleBox left'>
                        <h2 className='title'>About</h2>
                        <h2 className='title'>Me</h2>
                    </div>
                    <div className='contentBox2'>
                        {
                            this.state.aboutMe.map((val) => {
                                return this.showAboutMe(val)
                            })
                        }
                    </div>
                </div>
                <div className='contentBox eduBox'>
                    <div className='contentBox2'>
                        <h3 className='subTitle'>Formal</h3>
                        <div className='contentBox2'>
                            {
                                this.state.formalEdu.map( val => {
                                    return this.showEducationn(val)
                                })
                            }
                        </div>
                        
                        <h3 className='subTitle'>In Formal</h3>
                        <div className='contentBox2'>
                            {
                                this.state.inFormalEdu.map( val => {
                                    return this.showEducationn(val)
                                })
                            }
                        </div>
                    </div>
                    <div className='titleBox right'>
                        <h2 className='title'>My</h2>
                        <h2 className='title'>Eductaion</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile