import ToolTip from '../../../components/toolTip'
import './contactComponent.css'
let ContactComponent = props => {
    return(
        <div>
            <a className='contactComp toolTip'  href={props.link} target='_blank' data-aos='fade-right'data-aos-duration={1500 + (props.index * 1.5) * 100}>            
                <img src={props.contact} alt={props.contact}/>
                <ToolTip text={props.text}/>
            </a>
        </div>
    )
}

export default ContactComponent