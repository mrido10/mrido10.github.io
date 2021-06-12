import React, { Component } from 'react'
import './imageProfile.css'

class ImageProfile extends Component {
    showImage = () => {
        let imgView = document.getElementById('boxImgView'),
            imgProfile = document.getElementById('boxImg')
        imgView.style.display = 'block' 
        imgProfile.style.visibility = 'hidden'
    }

    render() {
        return (
            <div id='boxImg' className='smallView' onClick={this.showImage}></div>
        )
    }
}

export default ImageProfile