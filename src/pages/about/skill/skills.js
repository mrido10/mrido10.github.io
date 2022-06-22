import React, { Component } from 'react'
import ImageWithToolTip from '../../../components/image'
import javaIcon from '../../../assets/images/icons/java.svg'
import golangIcon from '../../../assets/images/icons/golang.svg'
import javascriptIcon from '../../../assets/images/icons/javascript.svg'
import reactIcon from '../../../assets/images/icons/react.svg'
import mySqlIcon from '../../../assets/images/icons/mysql.svg'
import htmlIcon from '../../../assets/images/icons/html5.svg'
import cssIcon from '../../../assets/images/icons/css3.svg'
import gitIcon from '../../../assets/images/icons/git.svg'
import arduinoIcon from '../../../assets/images/icons/arduino.svg'
import bootsrap from '../../../assets/images/icons/bootstrap.svg'
import redis from '../../../assets/images/icons/redis.svg'
import elasticSearch from '../../../assets/images/icons/elasticsearch.svg'
import postgres from '../../../assets/images/icons/postgresql.svg'
import debezium from '../../../assets/images/icons/debezium.svg'
import kafka from '../../../assets/images/icons/kafka.svg'


class Skills extends Component {
    state = {
        skill: [
            {name: javaIcon, toolTip: 'Java'},
            {name: golangIcon, toolTip: 'Golang'},
            {name: javascriptIcon, toolTip: 'Javascript'},
            {name: reactIcon, toolTip: 'React Js'},
            {name: mySqlIcon, toolTip: 'MySQL'},
            {name: postgres, toolTip: 'PostgreSQL'},
            {name: elasticSearch, toolTip: 'Elasticsearch'},
            {name: kafka, toolTip: 'Kafka'},    
            {name: debezium, toolTip: 'Debezium'},  
            {name: htmlIcon, toolTip: 'HTML5'},
            {name: cssIcon, toolTip: 'CSS3'},
            {name: bootsrap, toolTip: 'Bootsrap'},
            {name: redis, toolTip: 'Redis'},
            {name: gitIcon, toolTip: 'GIT'},
            {name: arduinoIcon, toolTip: 'Arduino'},                              
        ]
    }

    render() {
        return(
            <section id='skillsCont' className='cont1 skill'>
                <h2>SKI<span className='blue'>LLS</span></h2>
                {
                    this.state.skill.map((val, idx) => {
                        return <ImageWithToolTip src={val.name} toolTipText={val.toolTip} index={idx}/>
                        
                    })
                }
            </section>
        )
    }
}
export default Skills