import React, { Component } from 'react'
import TimeLine from '../../../components/timeLine'

class Experience extends Component {
    state = {
        experience: [
            {
                year: 'January, 2022 - Now', 
                work: 'Backend developer - PT. Paramadaksa Teknologi Nusantara',
                detail: 'Develop web application for Distribution Management System',
                line: 'ln'
            },
            {
                year: 'June, 2020 - January, 2022',
                work: 'Fullstack Programmer - PT. Paramadaksa Teknologi Nusantara',
                detail: 'Develop web application for Distribution Management System'
            }
        ]
    }
    render() {
        return(
            <section id='expCont' className='cont1'>
                <h2>WORK<span className='blue'> EXPERIENCE</span></h2>
                <TimeLine  whatFor={this.state.experience} />
            </section>
        )
    }
}

export default Experience