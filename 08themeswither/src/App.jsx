import { useState,useEffect } from 'react'
import Btn from './components/Btn'
import Card from './components/Card'
import { ThemeProvider } from './context/Theme'



function App() {
  const[themeMode,setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className='w-[400px] h-[380px] overflow-hidden  '>
        <div >
          <Btn/>
        </div>
        <div className='w-full max-w-sm mx-auto'>
          <Card/>
        </div>
      </div>
   </ThemeProvider>
  )
}

export default App
