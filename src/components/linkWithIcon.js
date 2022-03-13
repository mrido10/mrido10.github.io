import React from 'react';
import './linkWithIcon.css'


let LinkWithIcon = (props) => {
    return (
        <div className='linkCont'>
            <div className='img'>
                <img src={props.img} alt='icon'/>
            </div>
            <a href={props.linkTo} target='_blank' rel='noreferrer'>{props.linkName}</a>
        </div>
    )
}

export default LinkWithIcon