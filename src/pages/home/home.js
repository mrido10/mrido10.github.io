import React, { Component } from 'react'
import Navbar from '../../components/navbar'
import {Link} from 'react-router-dom'
import AOS from 'aos' 
import "aos/dist/aos.css"

import './home.css'

class Home extends Component { 
    componentDidMount = () => {
        AOS.init({
            duration : 400
        })
        AOS.refresh()
    }   
    render() {
        return(
            <>
            <div id='container'>
                <Navbar />
                <div id='boxContent' data-aos="fade">
                    <h3 className='hello'>Hello, I'am</h3>
                    <h1 className='name'>Muhammad Rido</h1>
                    <h2 className='job'>Web Developer</h2>
                    <p className='about'>
                        "Experienced in IT field since 2020. Skilled in Java, Golang, Javascript (React Js), Arduino, Database (mySql), HTML5, CSS3"
                    </p>
                    <Link className='download' to="file/Muhammad_Rido_CV.pdf" target="_blank" download disabled>Download CV</Link>
                </div>
                
            </div>
            </>
        )
    }
}

export default Home