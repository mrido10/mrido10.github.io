import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navbar: [
                'Home',
                'Profile',
                'Resume'
            ],
            navbarActive: false
        }
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
        this.setState({
            navbarActive: !this.state.navbarActive
        }, () => {
            let navbarBox = document.getElementById('itemBoxNavbar')
            this.state.navbarActive ? navbarBox.className += ' active' : navbarBox.className = 'itemBoxNavbar'
        })
    }

    handleKeepNavbar = () => {
        let navbarBox = document.getElementById('itemBoxNavbar')
        navbarBox.className = 'itemBoxNavbar active'
    }

    handleHideNavbar = () => {
        document.body.addEventListener('mouseup', () => {
            let navbarBox = document.getElementById('itemBoxNavbar')
            navbarBox.className = 'itemBoxNavbar'
        })
    }

    componentDidMount = () => {
        this.handleHideNavbar()
    }

    render() {
        return(
            <div id='navbarBox'>
                <div className='togle' id='togle' onClick={this.handleActiveNavbarTogle}>
                    <FontAwesomeIcon id='menu' icon={faEllipsisH} />
                </div>
                <div id='itemBoxNavbar' className='itemBoxNavbar' onClick={this.handleKeepNavbar}>
                    
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