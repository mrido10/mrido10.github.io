import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './navbar.css'

class Navbar extends Component {
    state = {
        navbar: [
            'Home',
            'Profile',
            'Resume'
        ]
    }

    navbarItem = (value) => {
        let linkTo = '/' + value.toLowerCase();
        if (linkTo === '/home') linkTo = ''
        return(
            <Link to={linkTo}>
                <div className='item'>{value}</div>
            </Link>
        )
    }

    handleActiveNavbarTogle = () => {
        let togle = document.getElementById('togle')
        let navbarBox = document.getElementById('itemBoxNavbar')
        if (!navbarBox.className.includes('active')) {
            navbarBox.className += ' active'
        } else {
            navbarBox.className = 'itemBoxNavbar'
        }


        
    }

    render() {
        return(
            <div id='navbarBox'>
                <div className='togle' id='togle' onClick={this.handleActiveNavbarTogle}>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </div>
                <div id='itemBoxNavbar' className='itemBoxNavbar'>
                    
                    {
                        this.state.navbar.map((val) => {
                            return this.navbarItem(val)
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Navbar