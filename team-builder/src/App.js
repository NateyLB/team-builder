import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import logo from './logo.svg';
import './App.css';
import TeamList from "./TeamList.js";
import Form from "./Form.js";

function App() {
const initialTeam = [
    {id:uuid(), name:"Nathan", email:"Nathan@lambda.com", role:"Back-End Engineer"},
    {id:uuid(), name:"Kyle", email:"Kyle@lambda.com", role:"Font-End Engineer"},
    {id:uuid(), name:"Emily", email:"Emily@lambda.com", role:"UI Engineer"},
    {id:uuid(), name:"Sam", email:"Sam@lambda.com", role:"Mobile Engineer"},
    {id:uuid(), name:"Allen", email:"Allen@lambda.com", role:"Data Scientist"},
    {id:uuid(), name:"Michael", email:"Michael@lambda.com", role:"Encoding Specialist"}
  ];
  
  const [team ,setTeam] = useState(initialTeam);
  const [name,setName] =useState('');
  const [email,setEmail] =useState('');
  const [role,setRole] =useState('');

  const onFormSubmit = event => {
    // stop the form from reloading the page on submit
    event.preventDefault()
    const newMember = {id:uuid(), 
        name: event.target.name.value, 
        email: event.target.email.value, 
        role: event.target.role.value
    };

    setTeam([...team, newMember]);
    
}

  console.log(team);

  return (
    <div id="main-wrapper">
      <TeamList data={team}/>
      <Form onFormSubmit={onFormSubmit}/>
    </div>
  );
}

export default App;
