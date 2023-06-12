import React, { Component } from 'react'
import TimeLine from '../../../components/timeLine'
import JSONData from '../../../assets/json/experience.json'

class Experience extends Component {
    render() {
        return(
            <section id='expCont' className='cont1'>
                <h2>WORK<span className='blue'> EXPERIENCE</span></h2>
                <TimeLine  whatFor={JSONData.experience} />
            </section>
        )
    }
}

export default Experience