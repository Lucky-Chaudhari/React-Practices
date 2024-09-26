import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter,setCounter] = useState(0)
   const addValue = () => {
   if(counter<20){

    counter = counter + 1
    setCounter(counter)

   }
  }
  const removeValue = () => {

    if(counter>0){
      setCounter(counter - 1)
     }

  }
  const reSet = () =>{
    setCounter(0)
  }
  return (

    <>

     <h1>Counter App </h1>
     <h2>Counter value: {counter}</h2>
     <button
     onClick={addValue}>Add Value:</button>
     <br />
     <button onClick={removeValue}>Remove Value</button>
     <br />
     <button onClick={reSet}>Reset</button>
    </>
  )
}

export default App
