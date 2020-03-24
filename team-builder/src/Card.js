import React from 'react';

function Card (props){

    return(
        <div>
            <h1>Name: {props.data.name}</h1>
            <h3>Role: {props.data.role}</h3>
            <h3>Email: {props.data.role}</h3>
        </div>
    );

}

export default Card;