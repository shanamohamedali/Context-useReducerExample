import React, { useContext, useState } from 'react'
import './Counter.css'
import { CounterContext } from '../../context/CounterContext'

export function Counter() {

    const {counter,onIncrement,onDecrement,error}=useContext(CounterContext);
    
  return (
    <div className='counter-container'>
      <h1>Counter: {counter}</h1>
      {error && <p style={{color:"red", fontWeight:"200"}}>{error}</p>}
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  )
}


