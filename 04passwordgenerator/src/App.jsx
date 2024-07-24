import { useState,useRef, useCallback,useEffect } from 'react'
import './App.css'

function App() {
    const [length, setlength]= useState(12)
    const [numberAllowed, setnumberAllowed]= useState(false)
    const [charAllowed, setcharAllowed]= useState(false)
    const [password,setpassword]= useState("")

    //useRef hook
    const passwordRef = useRef(null)

   const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(numberAllowed){
      str+="0123456789"
    }
    if(charAllowed){
      str+="!@#$%^&*[]"
    }

    for (let i = 0; i < length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char);
    }
    setpassword(pass)

   },[length,numberAllowed,charAllowed])

  const copypasswordtoclipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,100)
    
  },[password])

  useEffect(()=>{ //useeffect is used if anychanges in the dependency then the function in run 
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md rounded-lg px-4 my-8 text-orange-500 bg-zinc-500'>
        <h1 className='text-white text-center text-3xl my-4'>Password Genertor</h1>
        <div className='flex rounded-lg overflow-hidden mb-4 '>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef} />
        <button 
        onClick={copypasswordtoclipboard}className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
            />
            <label >Length :{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id="numberinput" 
            onChange={()=>{
              setnumberAllowed((prev)=>!prev);
            }}/>
            <label >Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            id="charinput" 
            onChange={()=>{
              setcharAllowed((prev)=>!prev);
            }}/>
            <label >characters</label>
          </div>

        </div>
      </div>
    </>
   
  )
}

export default App
