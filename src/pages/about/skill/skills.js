import React, { Component } from 'react'
import ImageWithToolTip from '../../../components/image'
import JSONData from '../../../assets/json/skills.json'
import Env from '../../../assets/json/global.json'

class Skills extends Component {
    render() {
        const env = Env
        return(
            <section id='skillsCont' className='cont1 skill'>
                <h2>SKI<span className='blue'>LLS</span></h2>
                {
                    JSONData.skill.map((val, idx) => {
                        const image = require(`../../../${env.pathIcon}${val.name}`)  
                        return <ImageWithToolTip src={image} toolTipText={val.toolTip} index={idx}/>
                    })
                }
            </section>
        )
    }
}
export default Skills