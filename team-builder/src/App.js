import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamList from "./TeamList.js";

function App() {
const initialTeam = [
    {name:"Nathan", email:"Nathan@lambda.com", role:"Back-End Engineer"},
    {name:"Kyle", email:"Kyle@lambda.com", role:"Font-End Engineer"},
    {name:"Emily", email:"Emily@lambda.com", role:"UI Engineer"},
    {name:"Sam", email:"Sam@lambda.com", role:"Mobile Engineer"},
    {name:"Allen", email:"Allen@lambda.com", role:"Data Scientist"}
  ];
  
  const [team ,setTeam] = useState(initialTeam);
  console.log(team);

  return (
    <div>
      <TeamList data={team}/>
    </div>
  );
}

export default App;
