import { useState } from 'react'

import './App.css'
import { useEffect } from 'react';

function App() {

  const [size,setSize] = useState({
    Height:window.innerHeight,
    Width:window.innerWidth

  });

  function SizeHandler() {

    setSize({
    Height:window.innerHeight,
    Width:window.innerWidth})

  }
  useEffect (()=>{
    window.addEventListener('resize',SizeHandler);


    return()=>{
      window.removeEventListener('resize',SizeHandler);
    }
  });
  return(
<div>
<h1>Window Size</h1>
<p>Width :{size.Width}px</p>
<p>Height :{size.Height}px</p>

</div>
  );



}
export default App;