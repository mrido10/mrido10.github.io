import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './timeLineDetail.css'

let DetailComponent = props => {
    return(
        <div className='myComp'>
            <div className="year"><FontAwesomeIcon icon={faCalendarAlt}/>{props.year}</div>
            <div className="header">{props.header}</div>
            <div className="detail">{props.detail}</div>
            <div className="circle"><div></div></div>
            <div className="space"></div>
            <div className="line"><div className={props.line}></div></div>
        </div>
    )
}

export default DetailComponent 