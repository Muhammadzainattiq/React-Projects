import {useState} from 'react';
import './App.css'

function App() {
let [counter, setCounter] = useState(0)
const addValue =()=>{
    setCounter(counter+1)}
const removeValue =()=>{
  if (counter>0){

    setCounter(counter-1)
  }
}
  return (
    <>
      <h1>My First React App</h1>
      <button
      onClick={addValue}
      >Add value </button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >Remove Value </button>
      <h2>Counter value: {counter}</h2>
    </>
  )
}

export default App
