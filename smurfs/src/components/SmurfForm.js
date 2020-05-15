import React from 'react';
import { connect } from "react-redux";
import { addSmurf } from '../actions/addSmurf';
import { useLocalStorage } from '../useLocalStorage';
import './App.css';

const SmurfForm = props => {
  const [ smurf, setSmurf ] = useLocalStorage('smurf form', {
    name: '',
    age: '',
    height: ''
  })

  const handleInput = e => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf(smurf);
    setSmurf({
      name: '',
      age: '',
      height: ''
    })
  }

  return (
    <div>
      {props.isAdding && <h2>Adding Smurf...</h2>}

      <form onSubmit={handleSubmit}>
        <label>
          <input 
            type='text'
            placeholder='Name'
            name='name'
            value={smurf.name}
            onChange={handleInput}
          />
        </label>

        <label>
          <input 
            type='number'
            name='age'
            value={smurf.age}
            min='1'
            minLength='1'
            maxLength='3'
            placeholder='Age'
            onChange={handleInput}
          />
        </label>

        <label>
          <input 
            type='number'
            name='height'
            value={smurf.height}
            min='10'
            placeholder='Height'
            onChange={handleInput}
          />
        </label>

        <button className='submit' onSubmit={handleSubmit}>Add Smurf</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    isAdding: state.add.isAdding,
    smurf: state.add.smurf,
    errors: state.add.errors
  }
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm);