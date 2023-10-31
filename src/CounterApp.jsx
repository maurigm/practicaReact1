import React, { useState } from 'react';
import Proptypes from 'prop-types';

export const CounterApp = ({value}) => {
  
  const [counter, setCounter] = useState(value) 
  const increment = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)
  const reset = () => setCounter(value)



  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

CounterApp.Proptypes = {
  value : Proptypes.number.isRequired,
}