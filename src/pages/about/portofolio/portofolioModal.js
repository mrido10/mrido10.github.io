import React from 'react'
import LinkWithIcon from '../../../components/linkWithIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import githubIcon from '../../../assets/images/icons/github.svg'
import web from '../../../assets/images/icons/web.svg'
import ImageWithToolTip from '../../../components/image'
import env from '../../../assets/json/global.json'
import './portofolioModal.css'

let PortofolioDetail = props => {
    const image = require(`../../../${env.pathPorto}${props.img}`)
    return(
        <div className='portoWrapper' onClick={() => {props.handleClickWrapper(false)}}>
            <div className='detailPortoWrapper' onClick={(e) => {e.stopPropagation()}}>
                <XButton onClick={() => props.handleClickWrapper(false)} />
                <div className='detailPortoCont'>
                    <div className='imgBox'>
                        <img className='img' src={image.default} alt='portofolio'/>
                    </div>
                    <DetailModalComponent props={props} />  
                </div>
            </div>
        </div>        
    )
}

export default PortofolioDetail

function XButton(props) {
    return (
        <div className='xButton' onClick={props.onClick} >
            <FontAwesomeIcon icon={faTimes} />
        </div>
    )
}

function DetailModalComponent(data) {
    const props = data.props
    return (
        <div className='detailBox'>
            <div className='detailCont'>
                <h3>Detail</h3>
                <p className='detail'>{props.detailPorto !== undefined ? props.detailPorto.detail : '-'}</p>
            </div>
            <div className='role'>
                <h3>Role</h3>
                <p className='detail'>{props.detailPorto !== undefined ? props.detailPorto.role : '-' }</p>
            </div>
            <TechnologyComponent props={props} />
            <LinkComponent props={props} />
        </div>
    )
}

function TechnologyComponent(data) {
    const props = data.props
    return (
        <div className='technology'>
            <h3>Technology</h3>
            <div>
                {props.detailPorto !== undefined ? props.detailPorto.technology.map( val => {
                    const img = require(`../../../assets/images/icons/${val.src}`).default
                    return (
                        <ImageWithToolTip src={img} toolTipText={val.name} aos='disable'
                            style={{width: '50px', height: '50px'}} styleBox={{margin: '0'}}/>
                    )
                }) : '-'}
            </div>
        </div>
    )
}

function LinkComponent(data) {
    const props = data.props
    return (
        <div className='linkBox'>
            {props.detailPorto !== undefined && props.detailPorto.repo !== undefined ?
                <LinkWithIcon linkName={(props.detailPorto.repo).replace('https://', '').replace('http://', '')} 
                    linkTo={props.detailPorto.repo} img={githubIcon} />
                : null
            }
            {props.detailPorto !== undefined && props.detailPorto.web !== undefined ?
                <LinkWithIcon linkName={(props.detailPorto.web).replace('https://', '').replace('http://', '')} 
                    linkTo={props.detailPorto.web} img={web} />
                : null
            }
        </div>
    )
}
