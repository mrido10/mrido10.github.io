import React, { Component } from 'react'
import emailIcon from '../../../assets/images/icons/gmail.svg'
import linkedinIcon from '../../../assets/images/icons/linkedin.svg'
import githubIcon from '../../../assets/images/icons/github.svg'
import instagramIcon from '../../../assets/images/icons/instagram.svg'
import ContactComponent from './contactComponent'

class Contact extends Component {
    state = {
        icon: [
            {name: linkedinIcon, link: 'https://linkedin.com/in/muhammad-rido-533953140', toolTip: 'LinkedIn: Muhammad Rido'},
            {name: emailIcon, link: 'mailto:muhammadrido19@gmail.com', toolTip: 'gmail: muhammadrido19@gmail.com'},
            {name: githubIcon, link: 'https://github.com/mrido10/', toolTip: 'GitHub: mrido10'},
            {name: instagramIcon, link: 'https://www.instagram.com/m.rido10/', toolTip: 'Instagram: @mrido10'}
        ]
    }

    render() {
        return(
            <section id='contactCont' className='cont1 contact'>
                <h2>CONTACT<span className='blue'> ME</span></h2>
                {
                    this.state.icon.map((val, idx) => {
                        return <ContactComponent contact={val.name} link={val.link} text={val.toolTip} index={idx}/>
                    })
                }
            </section>
        )
    }
}

export default Contact