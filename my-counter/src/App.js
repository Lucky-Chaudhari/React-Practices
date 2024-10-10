
import './App.css';
import { useState } from "react";

function App() {
 const [count, setCount] = useState(0);
  function descHandler() {
    if (0<count) {
      setCount(count-1);
    }

  }
  function increHandler(){
    if (count< 20) {
      setCount(count+1);
    }

  }
  function resetHansler(){
    setCount(0);
  }

  return (
   <div className='flex w-[100vw] h-[100vh] justify-center items-center bg-slate-700 flex-col gap-10'>
   <div className='text-white font-medium text-2xl '>Increment && Decrement</div>
   <div className=' bg-slate-400 flex justify-center gap-12 py-3 rounded-sm text-[25px]'>
    <button onClick={descHandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'> - </button>
    <div className=' gap-12 text-4xl'>{count}</div>
    <button onClick={increHandler} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'> + </button>
   </div>
   <button onClick={resetHansler} className='bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg'>Reset</button>

   </div>
  );
}

export default App;
