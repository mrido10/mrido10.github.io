import React, { Component } from 'react'
import {Link} from 'react-router-dom'

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
        console.log(linkTo)
        return(
            <Link to={linkTo}>
                <div className='item'>{value}</div>
            </Link>
        )
    }

    render() {
        return(
            <>
            <div id='logo'>LOGO</div>
            {
                this.state.navbar.map((val) => {
                    return this.NavbarItem(val)
                })
            }
            </>
        )
    }
}

export default Navbar