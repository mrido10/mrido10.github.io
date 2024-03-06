import React, { Component } from 'react'
import Navbar from '../../components/navbar'
import {Link} from 'react-router-dom'
import Wave from '../../components/wave'
import picture from '../../assets/images/homePict.png'
import AOS from 'aos'

import './home.css'
import './container.css'
import 'aos/dist/aos.css';

class Home extends Component { 
    componentDidMount() {
        AOS.init({
            duration : 1500
        })
    }
    render() {  
        return(
            <div id='container' className='home'>
                <Navbar />
                <section id='homeCont'>
                    <div className='imgCont'>
                        <img src={picture} alt='This Pictures' data-aos='fade-up'></img>
                    </div>
                    <div className='homeContCtn'>
                        <h3 className='hello' data-aos='fade-right' data-aos-duration='1000' data-aos-easing='ease-in-sine'>Hello, I'am</h3>
                        <h1 className='name' data-aos='fade-right' data-aos-duration='1200' data-aos-easing='ease-in-sine'>MUHAMMAD <span className='blue'>RIDO</span></h1>
                        <h2 className='job' data-aos='fade-right' data-aos-duration='1400' data-aos-easing='ease-in-sine'>Backend Engineer</h2>
                        <div data-aos="fade-up" data-aos-duration='1500'><Link className='button' to='/about'><span>More About Me</span></Link></div>
                    </div>
                </section>
                <Wave />
            </div>
        )
    }
}

export default Home