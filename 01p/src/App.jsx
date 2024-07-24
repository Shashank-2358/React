import { useState } from 'react'



function App() {

  let [counter,setcounter]=useState(12)

//let counter=15;

let addvalue=()=>{
  console.log(counter);
  counter+=1
  setcounter(counter)
}
let removevalue=()=>{
  console.log(counter);
  counter-=1;
  setcounter(counter)
}
  
  return (
    <>
          
      <h1>Vite + React</h1>
      <h2> Counter Value : {counter}</h2>
      <button onClick={addvalue}> Add Value</button>
      <button onClick={removevalue}> Remove Value</button>
   
     
    </>
  )
}

export default App
