import React from "react";
import "./App.css";
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';
import SMURF from '../smurfs.png'
import logo from '../smurf-logo.png';

export default function App() {
  return (
    <div className="App">
      <img className='banner' src={SMURF}></img>
      <img className='logo' src={logo}></img>
      <SmurfForm />
      <SmurfList />
    </div>
  );
}
