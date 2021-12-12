import React from 'react'
import './Tattooltem.css'

function Tattooltem(props) 
{
    const {tattoo,onTattooClick} = props;
    return (
        
        <div className="tattoo-item">
            <img src={tattoo.thumbnailUrl} onClick ={() => {onTattooClick(tattoo)}} />
            <h1>{tattoo.title}</h1>
        </div>
    );
}

export default Tattooltem;
