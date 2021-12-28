import './portofolioComponent.css'
let PortofolioComponent = props => {
    return(
        <div className='portoComp'>
            <div className='img'>
                <img src={props.img} alt='image'></img>
            </div>
            <div className='name'>{props.name}</div>
        </div>
    )
}
export default PortofolioComponent