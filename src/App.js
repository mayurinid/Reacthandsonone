import React, { useState } from 'react'
import ClassComp from './components/ClassComp'
import FunctionalComp from './components/FunctionalComp'
import './App.css';


const App = () => {
  const [count,setCount]=useState(false)
  const [data,setData]=useState(false)
  const handleFunctional=()=>{
    setCount(!count);
  }
  const handleClass=()=>{
    setData(!data);
  }
  return (
    <>
    <div className='App'><h1> Styling Using Funtional and Class Component</h1></div>
   <button className="btn" onClick={handleClass}>To see styling in class component </button>
   <button className="btn1" onClick={handleFunctional}>To see styling in functional component </button>
   {count ? <FunctionalComp/>: null}
   {data ? <ClassComp/>: null}
   </>
  )
}

export default App