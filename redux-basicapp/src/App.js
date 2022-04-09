

import React from 'react';
import { connect } from 'react-redux';
import { InAction } from './actions';
import { DecAction } from './actions';

const App = ({local_varaiable,InAction,DecAction}) => {
  return (
    <div className="App">
          <center>     
      <h2>{local_varaiable}</h2>
      <button onClick={InAction}>INCREMENT</button>
      <button onClick={DecAction}>DECREMENT</button>
      </center>

    </div>
  );
}


const mapStateToProps = state =>({
  local_varaiable : state
})



export default connect(mapStateToProps,{InAction,DecAction}) (App);
