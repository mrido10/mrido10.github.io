import ToolTip from '../../../components/toolTip'
import './skillComponent.css'

let SkillComponent = props => {
    return(
        <div className='skillComp toolTip'>
            <img src={props.skill} alt={props.skill}/>
            {/* {props.skill} */}
            <ToolTip text={props.text} />
        </div>
    )
}
export default SkillComponent