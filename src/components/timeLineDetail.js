import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './timeLineDetail.css'

let DetailComponent = props => {
    return(
        <div className='myComp' data-aos='fade-up'>
            <div className="year"><FontAwesomeIcon icon={faCalendarAlt}/>{props.year}</div>
            <div className="header">{props.header}</div>
            <div className="detail">
                {props.detail !== undefined && props.detail !== null ? 
                props.detail.map(val => {
                    return (
                        <div className="detailIn">
                            <div>{'>'}</div>
                            <div>{val}</div>
                        </div>
                    )
                }): <></>}
            </div>
            <div className="circle"><div></div></div>
            <div className="space"></div>
            <div className="line"><div className={props.line}></div></div>
        </div>
    )
}

export default DetailComponent 