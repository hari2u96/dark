import React from 'react'
import { useState } from 'react'
import "./Dark.css"
function Dark() {

    const [darkMode,setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark-mode' :'light-mode'}>
        <div className='container'>
            <span style={{color : darkMode? 'grey' :'red'}}>Light Mode</span>
            <div className='switch-container'>
                <label className='switch'>
                    <input type='checkbox'onChange={() => setDarkMode(!darkMode)}/>
                    <span className='slide rounded'></span>
                </label>
            </div>
            <span style={{color : darkMode? 'grey' :'red'}}>Dark Mode</span>
        </div>
        
    </div>
  )
}

export default Dark