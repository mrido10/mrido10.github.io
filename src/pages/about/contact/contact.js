import React, { Component } from 'react'
import ContactComponent from './contactComponent'
import JSONData from '../../../assets/json/contact.json'
import env from '../../../assets/json/global.json'

class Contact extends Component {
    render() {
        return(
            <section id='contactCont' className='cont1 contact'>
                <h2>CONTACT<span className='blue'> ME</span></h2>
                {
                    JSONData.contact.map((val, idx) => {
                        const image = require(`../../../${env.pathIcon}${val.name}`)  
                        return <ContactComponent contact={image.default} link={val.link} text={val.toolTip} index={idx}/>
                    })
                }
            </section>
        )
    }
}

export default Contact