import detailPorto from '../../../assets/content/portofolio/detail.json'
import Env from '../../../assets/json/global.json'
import './portofolioComponent.css'

const PortofolioComponent = props => {
    const env = Env
    const image = require(`../../../${env.pathPorto}${props.porto.img}`)  
    return(
        <div className='portoComp' 
            onClick={() => {showModal(props.porto.key, props)}} 
            data-aos='fade-right' 
            data-aos-duration={1500 + (props.index * 150) * 100}>
            <div className='box-img'>
                <img className='img' src={image} alt='portofolio' />
            </div>
            <div className='name'>{props.porto.name}</div>
        </div>
    )
}
export default PortofolioComponent

const showModal = (key, props) => {
    let result = {
        img: props.porto.img,
        showModal: true,
        data: detailPorto[key]
    }
    props.handleClick(result)    
    return true
} 