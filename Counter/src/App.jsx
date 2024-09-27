import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// All the Update are Add into the batches and this all manege by the  useState
 let [counter,setCounter] = useState(0)
   const addValue = () => {
   if(counter<20){

  // set Counter is also the function and  in this function callback except karta hai
  //jo callback ke throught ata hai tb actualy one complete honeke baad Propare Update hota hai

    setCounter( (prevcounter)=>prevcounter + 1 )
    setCounter( (counter)=>counter + 1 )
    setCounter( (counter)=>counter + 1 )
    setCounter( (counter)=>counter + 1 )
    setCounter( (counter)=>counter + 1 )



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
