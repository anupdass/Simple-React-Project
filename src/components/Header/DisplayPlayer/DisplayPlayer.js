import React, { useState } from 'react';
import './DsiplayPlayer.css'
import fakeData from '../../../fakeData/playerinfo'
import Player from '../Player/Player'
import Team from '../../Team/Team';

const DisplayPlayer = () => {
    const [players, setPlayer] = useState(fakeData);
    // cart design
    const [teampalyer,setTeamplayer] = useState([]);
    const addToTeam = (singleplayer)=>{
        const newteam = [...teampalyer,singleplayer];
        setTeamplayer(newteam);
    }
    
    return (
        <div className='main'>
            <div className="player">
                {
                    players.map(plyr => <Player player={plyr}  key={plyr.id} addteam={addToTeam}></Player>)
                }
            </div>
            <div className="team-member">
                <Team teampalyer={teampalyer}></Team>
            </div>
        </div>
    );
};

export default DisplayPlayer;