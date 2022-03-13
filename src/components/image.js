import ToolTip from './toolTip'
import './image.css'

let ImageWithToolTip = props => {
    const aos = props.aos !== undefined && props.aos === 'disable' ? {} : {
        'data-aos': 'fade-right', 
        'data-aos-duration': 1200 + ((props.index !== undefined ? props.index : 0) * 1.5) * 100
    }
    const style = props.style !== undefined ? {style: props.style} : {}
    const styleBox = props.styleBox !== undefined ? {style: props.styleBox} : {}
    
    return(
        <div className='imageWithToolTip toolTip' {...styleBox}>
            <img src={props.src} alt={props.name} {...aos} {...style} />
            <ToolTip text={props.toolTipText} />
        </div>
    )
}
export default ImageWithToolTip