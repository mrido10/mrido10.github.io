import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Link as LinkScroll} from "react-scroll"

import './navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navbar: [
                {name: 'Home', to: '/'},
                {name: 'About', to: 'aboutMeCont'},
                {name: 'Education', to: 'eduCont'},
                {name: 'Experience', to: 'expCont'},
                {name: 'Skill', to: 'skillsCont'},
                {name: 'Portofolio', to: 'portoCont'},
                {name: 'Contact', to: 'contactCont'}
            ],
            navbarActive: undefined
        }
    }

    navbarItem = (value) => {
        if (value.name === 'Home') {
            return (
                <Link to={value.to}>
                    <div className='item'>{value.name}</div>
                </Link>
            )
        }
        return(
            <LinkScroll
                activeClass='active'
                to={value.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            ><div className='item'>{value.name}</div></LinkScroll>
        )
    }

    handleActiveNavbarTogle = () => {
        let box = document.getElementById('navbarBox')
        let navbarBox = document.getElementById('itemBoxNavbar')
        if (this.state.navbarActive === undefined || this.state.navbarActive === null) {
            box.style.width = '200px'
            navbarBox.classList.add('active')
        } else {
            box.style.width = '0'
            navbarBox.classList.remove('active')
        }

        this.setState({
            navbarActive: navbarBox.classList[1]
        })
        
    }

    handleKeepNavbar = () => {
        let navbarBox = document.getElementById('itemBoxNavbar')
        navbarBox.classList.add('active')
    }

    handleHideNavbar = () => {
        document.body.addEventListener('mouseup', () => {
            let navbarBox = document.getElementById('itemBoxNavbar')
            navbarBox.classList.remove('active')
        })
    }

    componentDidMount = () => {
        let a = document.querySelectorAll('#itemBoxNavbar a')
        a.forEach(val => {
            val.addEventListener('click', () => {
                this.setState({
                    navbarActive: undefined
                })
            })
        })
        this.handleHideNavbar()
        this.setState({
            navbarActive: document.querySelector('.itemBoxNavbar.active')
        })
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