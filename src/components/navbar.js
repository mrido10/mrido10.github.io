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

    NavbarItem = (value) => {
        let linkTo = '/' + value.toLowerCase();
        if (linkTo === '/home') linkTo = ''
        return(
            <Link to={linkTo}>
                <div className='item'>{value}</div>
            </Link>
        )
    }

    render() {
        return(
            <div id='navbarBox'>
                <div id='itemBoxNavbar'>
                {
                    this.state.navbar.map((val) => {
                        return this.NavbarItem(val)
                    })
                }
                </div>
            </div>
        )
    }
}

export default Navbar