import React, { Component } from 'react'
import Navbar from '../../components/navbar'
import {Link} from 'react-router-dom'
import AOS from 'aos' 
import "aos/dist/aos.css"

import './home.css'

class Home extends Component { 
    state = {
        widthImage: '',
        displayContent: ''
    }
    
    handleShowImage = () => {
        let windowSize = window.matchMedia('(max-width: 700px)')
        let contentBox = document.getElementById('boxContent')
        let image = document.getElementById('boxImg')
        let content = document.getElementById('boxContentChild')
        if (windowSize.matches) {
            contentBox.style.top = '50%'
            contentBox.style.transform = 'translate(0, -50%)'
            image.style.width = '100vw'
            image.style.height = '100vw'
            image.style.borderRadius = '0'   
            content.style.display = 'none'
        }
    }

    handleBackImage = () => {
        let image = document.getElementById('boxImg')
        let content = document.getElementById('boxContentChild')
        let windowSize = window.matchMedia('(max-width: 700px)')
        document.body.addEventListener('mouseup', () => {
            image.style.width = this.state.widthImage
            image.style.height = this.state.widthImage
            content.style.display = this.state.displayContent
            if (windowSize.matches) {
                image.style.borderRadius = '50%'
            } else {
                image.style.borderRadius = '0 50% 50% 50%' 
            }
        })
    }

    componentDidMount = () => {
        AOS.init({
            duration : 400
        })
        AOS.refresh()

        this.handleBackImage()
        let image = document.getElementById('boxImg'),
            imgStyle = window.getComputedStyle(image),
            imgWidth = imgStyle.getPropertyValue('width')
        let content = document.getElementById('boxContentChild'),
            cntnStyle = window.getComputedStyle(content),
            cntnDisplay = cntnStyle.getPropertyValue('display')

        this.setState({
            widthImage: imgWidth,
            displayContent: cntnDisplay
        }, () => {
            console.log(this.state.widthImage)
        })
    } 

    render() {  
        return(
            <div id='container'>
                <Navbar />
                <div id='boxContent' data-aos="fade">
                    <div id='boxImg' onClick={this.handleShowImage}></div>
                    <div id='boxContentChild'>
                        <h3 className='hello'>Hello, I'am</h3>
                        <h1 className='name'>Muhammad Rido</h1>
                        <h2 className='job'>Web Developer</h2>
                        <p className='about'>
                            "Experienced in IT field since 2020. Skilled in Java, Golang, Javascript (React Js), Arduino, Database (mySql), HTML5, CSS3"
                        </p>
                        <Link className='download' to="file/Muhammad_Rido_CV.pdf" target="_blank" download disabled>Download CV</Link>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home