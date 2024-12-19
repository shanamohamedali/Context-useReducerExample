import { useState } from 'react'
import './App.css'
import { Counter } from './components/counter/Counter'
import {CounterUsingReducer} from './components/CounterUsingReducer'

function App() {


  return (
    <>
    {/* //counter using context */}
       {/* <Counter/>  */}

       {/* //counter using reducer */}
      <CounterUsingReducer/>
  </>
  )
}

export default App
