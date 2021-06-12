import React, { Component } from 'react'
import Navbar from '../../components/navbar'
import {Link} from 'react-router-dom'
import ImageProfile from '../../components/imageProfile'
import ImageProfileView from '../../components/imageProfileView'

import AOS from 'aos' 
import "aos/dist/aos.css"

import './home.css'
import './container.css'

class Home extends Component { 
    state = {
        widthImage: '',
        displayContent: ''
    }

    componentDidMount = () => {
        AOS.init({
            duration : 400
        })
        AOS.refresh()
    } 

    render() {  
        return(
            <div id='container'>
                <Navbar />
                <ImageProfileView />
                <div id='boxContentContainer' data-aos="fade">
                    <ImageProfile  />
                    <div id='boxContent'>
                        <h3 className='hello'>Hello, I'am</h3>
                        <h1 className='name'>Muhammad Rido</h1>
                        <h2 className='job'>Web Developer</h2>
                        <p className='about'>
                            "Experienced in IT field since 2020. Skilled in Java, Golang, Javascript (React Js), Arduino, Database (mySql), HTML5, CSS3"
                        </p>
                        <Link className='download' onClick={() => {window.open('file/Muhammad_Rido_CV.pdf')}}>Download CV</Link>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home