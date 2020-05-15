import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchSmurfs } from '../actions/fetchSmurfs';
import './App.css';
import Smurf from './Smurf';

const SmurfList = props => {
  useEffect(() => {
    props.fetchSmurfs();
  }, [props.isAdding])

  return (
    <div className='smurf-list'>
      {props.isFetching && <h2 className='loading'>Loading...</h2>}
      {props.smurfs &&
        props.smurfs.map(smurf => (
          <Smurf key={smurf.id} smurf={smurf} />
        ))
      }
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    isFetching: state.smurfs.isFetching,
    smurfs: state.smurfs.smurfs,
    errors: state.smurfs.errors,
    isAdding: state.add.isAdding
  }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);