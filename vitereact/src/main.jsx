import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'





function MyApp(){
  return (
    <div>
      <h1>
        Custom App !
      </h1>
    </div>
  )
}

const ReactElement = {
  type: 'a',
  props:{
    href:'https://google.com',
    target:'_blank'

  },
   children: 'Click me to visit google'
}


const anotherElement = (
  <a href="https://google..com" target="_blank"> Visit Google</a>
)



//In This Section We Will see how to Create react Element With the Help Of React Methode
//And secode method:- import {jsx as _jsx} from "react/js",but these method are some issue


const reactElement = React.createElement(
  'a',
  {
    href:'https://google.com',
    target:'_blank'
  },
  'click me to visit google'
)


createRoot(document.getElementById('root')).render(

  reactElement

)

// {variable_Name} This is also called as the Evaluated
//  Expression In this not Write the javasript but we will
//  write the javasript final outcome jo Evaluate ho gaya hai

//  wo likhate hai
