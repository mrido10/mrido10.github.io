import React, { Component } from 'react'
import TimeLine from '../../../components/timeLine'

class Education extends Component {
    state = {
        formal: [
            {year: '2014 - 2019', school: 'S1 Fisika - Universitas Jambi', line: 'ln'},
            {year: '2011 - 2014', school: 'IPA - SMAN 3 Merangin'},
            // {year: '2008 - 2011', school: 'SMPN 23 Merangin', line: 'ln'},
            // {year: '2002 - 2008', school: 'SDN 249 / VI Rawa Jaya I'}
        ],
        inFormal: [
            {
                year: 'March 2020 - May 2020', 
                school: 'Fullstack Programmer - G2 Academy',
                detail: 'IT bootcamp program organized by PT. Paramadaksa Teknologi Nusantara, in collaboration with G2 Academy'
            }
        ]
    }
    render() {
        return(
            <section id='eduCont' className='cont1'>
                <h2>EDU<span className='blue'>CATION</span></h2>
                <TimeLine title='FORMAL' whatFor={this.state.formal} />
                <TimeLine title='INFORMAL' whatFor={this.state.inFormal} />
            </section>
        )
    }
}

export default Education