import React, { Component } from 'react'
import DetailComponent from './timeLineDetail'
import './timeLine.css'

class MyComponent extends Component {
    state = {
        whatFor: this.props.whatFor
    }
    render() {
        return(
            <div className='contx'>
                {this.props.title != null ? <h3 data-aos='fade-up'>{this.props.title}</h3> : <></>}
                {
                    this.state.whatFor.map(val => {
                        return <DetailComponent year={val.year} header={val.school || val.work} 
                            detail={val.detail} line={val.line}/>
                    })
                }
            
            </div>
        )
    }
}

export default MyComponent