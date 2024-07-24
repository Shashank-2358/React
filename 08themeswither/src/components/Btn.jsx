import React from 'react'
import useTheme from '../context/Theme'

function Btn() {
    const{themeMode,lightTheme,darkTheme}= useTheme()
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkTheme()
        } else {
            lightTheme()
        }
    }
    
  return (
    <div className='relative border-2 border-sky-300'>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-50 text-slate-700 dark:bg-slate-700 dark:text-slate-50 p-1 text-xl font-medium' >
            <input 
            value=""
            type="checkbox" 
            onChange={onChangeBtn}
            checked={themeMode=== "dark"}/>
        </div>
    </div>
  )
}

export default Btn