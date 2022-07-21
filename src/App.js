import React, { useState } from 'react';
import { legacy_createStore as createStore } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux'
import Input from './component/input';
import Board from './component/board';


function reducer (currentState, action) {

  if (currentState === undefined) {
    return {
      player : {},
    }
  }


  const newState = { ...currentState };
  if (action.type === 'addPlayer') {
    console.log(newState.player)
    if (action.payload !== '') {
      newState.player[action.payload[1]] = action.payload[0]

    }
  }
  if (action.type === 'deletePlayer') {
    let num = Number(action.payload)
    console.log(`ddd > ${action.payload}`)
    console.log(newState.player)
    console.log(`what > ${newState.player[action.payload]}`)
    delete newState.player[action.payload]
  }

  console.log(newState)
  return newState;
}

const store = createStore(reducer)


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Input></Input>
        <Board></Board>
      </Provider>
    </div>
  );
}

export default App;
