import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Vite + React</h1>
      <h2 className='bg-green-300 text-zinc-900 p-3 rounded-xl mb-5 ' >TAilwind CSS</h2>
      <Card name='Shashank' btn='click me'/>
      <Card name="kumar" btn='visited me'/>

    </>
  )
}

export default App
