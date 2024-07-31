import { useState } from 'react';
import './App.css'

function App() {
   let [counter, setCounter]  =    useState(15)
  // let counter = 23;
  const addValue = () => {
    setCounter(counter)
    counter = counter +1 ;
  }

  const RemValue = () => {
    setCounter(counter)
    counter = counter -1 ;
  }
  return (
    <>
    <h1>Hooks In React</h1>
    <h2>Counter value :{counter}</h2>
    <button 
    onClick={addValue}>Add value {counter} </button>
    <br/>
    <button onClick={RemValue}>Remove Value {counter}</button>

</>
  )
}

export default App