import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [counter , setCounter] = useState(0);



  // let  counter =15;

  const addValue= ()=>{
    // console.log("Value Added");
    counter=counter+1;
    if(counter >20){
      alert("Counter can not go above 20");
      return ;
    }
    setCounter(counter);
  }

  const  removeValue= ()=>{
    counter=counter-1;
    if(counter <0){
      alert("Counter can not go beyond 0");
      return ;
    }
    setCounter(counter);
  }
  return (
    <>
      <h1>Minute aur React</h1>
      <h5>Counter Value :{counter}</h5>

      <button onClick={addValue}>Add value</button> 
      <br />
      <button onClick={removeValue}>Remove value</button>

      {/* <p>You can not go beyond {counter}</p> */}

    </>
  )
}

export default App
