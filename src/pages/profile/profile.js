import React, { Component } from 'react'
import Navbar from '../../components/navbar'

class Profile extends Component {
    render () {
        return(
            <div id='container'>
                <Navbar />
                <div>Profile Page</div>
            </div>
        )
    }
}

export default Profile