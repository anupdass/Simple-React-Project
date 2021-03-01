import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const {name,salary,img,about} = props.player;
    return (
        <div className='player-main'>
            <div className="img">
               <img src={img} alt=""/>
            </div>
            <div className="info">
                <h1>Name : {name}</h1>
                <p><small>Salary: ${salary}</small></p>
                <p><small>About: {about}</small></p>
                <button 
                className='addteam' onClick={()=>props.addteam(props.player)}><span className='icon'><FontAwesomeIcon icon={faPlusSquare} /></span> Add to Team</button>
            </div>
            
        </div>
    );
};

export default Player;