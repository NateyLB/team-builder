import React from 'react';

function Card (props){

    return(
        <div id="card">
            <h2>Name: {props.data.name}</h2>
            <h3>Role: {props.data.role}</h3>
            <h3>Email: {props.data.email}</h3>
        </div>
    );

}

export default Card;