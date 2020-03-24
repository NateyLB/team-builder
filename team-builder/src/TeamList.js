import React from 'react';
import Card from "./Card.js";

function TeamList (props){

return(
    <div id="team-list">
        {props.data.map(element =>{
            return <Card data={element} />
        })}
    </div>
);
}

export default TeamList