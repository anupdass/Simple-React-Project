import React from 'react';
import SinglePalyer from '../SinglePlayer/Singleplayer';
import './Team.css'

const Team = (props) => {
    const team = props.teampalyer;
    const totalSalary = team.reduce((total,salary) => total + parseInt(salary.salary),0)
    
    return (
        <div className='team'>
            <h2>Team Member</h2>
            <h3>Total Member :  {team.length}</h3>
            <h3>Total Member Salary:  ${totalSalary} </h3>
            <h1>Your Team Member List</h1>
            <h4>
                {
                    team.map(player => <SinglePalyer player={player}></SinglePalyer>)
                }
            </h4>
        </div>
    );
};

export default Team;