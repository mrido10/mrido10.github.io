import detailPorto from '../../../assets/content/portofolio/detail.json'
import Env from '../../../assets/json/global.json'
import './portofolioComponent.css'

let PortofolioComponent = props => {
    const image = require(`../../../${Env.pathPorto}${props.porto.img}`)  
    return(
        <div className='portoComp' onClick={() => {showModal(props.porto.key, props)}} data-aos='fade-left' data-aos-duration={1500 + (props.index * 15) * 100}>
            <div className='box-img'>
                <img className='img' src={image.default} alt='portofolio' />
            </div>
            <div className='name'>{props.porto.name}</div>
        </div>
    )
}
export default PortofolioComponent

function showModal(key, props) {
    let result = {
        img: props.porto.img,
        showModal: true,
        data: detailPorto[key]
    }
    props.handleClick(result)    
    return true
} 