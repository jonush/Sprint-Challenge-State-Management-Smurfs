import React from 'react';
import { connect } from "react-redux";
import { deleteSmurf } from '../actions/deleteSmurf';
import './App.css';

const Smurf = props => {
  return (
    <div className='card'>
    <div className='smurf'>
      <div className='info'>
        <h2>{props.smurf.name}</h2>
        <h3>Age: {props.smurf.age} years old</h3>
        <h3>Height: {props.smurf.height} cm</h3>
      </div>
      <button className='delete' onClick={()=>props.deleteSmurf(props.smurf.id)}>X</button>
    </div>
    </div>
  );
}

export default connect(null, {deleteSmurf})(Smurf);