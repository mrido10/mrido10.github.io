import React, { Component } from 'react'
import Navbar from '../../components/navbar'
import {Link} from 'react-router-dom'
import Wave from '../../components/wave'
import picture from '../../assets/images/homePict.png'

import './home.css'
import './container.css'

class Home extends Component { 
    render() {  
        return(
            <div id='container' className='home'>
                <Navbar />
                <section id='homeCont'>
                    <div className='imgCont'>
                        <img src={picture} alt='This Pictures'></img>
                    </div>
                    <div className='homeContCtn'>
                        <h3 className='hello'>Hello, I'am</h3>
                        <h1 className='name'>MUHAMMAD <span className='blue'>RIDO</span></h1>
                        <h2 className='job'>Web Developer</h2>
                        <Link className='button' to='/about'><span>More About Me</span></Link>
                    </div>
                </section>
                <Wave />
            </div>
        )
    }
}

export default Home