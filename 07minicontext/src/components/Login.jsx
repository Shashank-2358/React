import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const[Username,setUsername]=useState('')
    const[password,setPassword]=useState('')

    const{setUser} = useContext(UserContext)
    const handlesubmit =(e)=>{
        e.preventDefault()
        setUser({Username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={Username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='Username' />

        <input type="text"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
         placeholder='Password' />
        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login