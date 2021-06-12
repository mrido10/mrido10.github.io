import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import './imageProfileView.css'

class ImageProfileView extends Component {
    hiddenImage = () => {
        let imgView = document.getElementById('boxImgView'),
            imgProfile = document.getElementById('boxImg')
        imgView.style.display = 'none' 
        imgProfile.style.visibility = 'visible'
    }

    render() {
        return (
            <div id='boxImgView' onClick={this.hiddenImage}>
                <div id='imgView'><FontAwesomeIcon icon={faTimesCircle} onClick={this.hiddenImage} /></div>
            </div>
        )
    }
}

export default ImageProfileView