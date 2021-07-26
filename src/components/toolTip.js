import './toolTip.css'
let ToolTip = props => {
    return(
        <span className="tooltiptext">{props.text}</span>
    )
}

export default ToolTip