import ToolTip from '../../../components/toolTip'
import './contactComponent.css'
let ContactComponent = props => {
    return(
        <a className='contactComp toolTip' href={props.link} target='_blank'>            
            <img src={props.contact} alt={props.contact}/>
            <ToolTip text={props.text}/>
        </a>
    )
}

export default ContactComponent