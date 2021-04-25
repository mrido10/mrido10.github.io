import React, { Component } from 'react'
import Navbar from '../../components/navbar'

import './resume.css'
class Resume extends Component {
    render () {
        return(
            <div id='container'>
                <Navbar />
                <div>Resume Page</div>
            </div>
        )
    }
}

export default Resume