import ToolTip from '../../../components/toolTip'
import './skillComponent.css'

let SkillComponent = props => {
    return(
        <div className='skillComp toolTip'>
            <img src={props.skill} alt={props.skill} data-aos='fade-right'data-aos-duration={1200 + (props.index * 1.5) * 100}/>
            <ToolTip text={props.text} />
        </div>
    )
}
export default SkillComponent