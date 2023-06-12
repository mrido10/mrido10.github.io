import React, { Component } from 'react'
import TimeLine from '../../../components/timeLine'
import JSONData from '../../../assets/json/education.json'

class Education extends Component {
    render() {
        return(
            <section id='eduCont' className='cont1'>
                <h2>EDU<span className='blue'>CATION</span></h2>
                <TimeLine title='FORMAL' whatFor={JSONData.formal} />
                <TimeLine title='INFORMAL' whatFor={JSONData.inFormal} />
            </section>
        )
    }
}

export default Education