import React from 'react';
import './Singleplayer.css'

const SinglePalyer = (props) => {
    const{name,img} = props.player;
    return (
        <div className='team-player'>
            <div className="team-img">
                <img src={img} alt="" />
            </div>
            <div className="player-name">
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default SinglePalyer;