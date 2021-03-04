import React from 'react'
import { BiMoon } from "react-icons/bi";

import '../../index.css'

const Header = () => {
    return (
        <div className='header'>
            <strong>Where is the world?</strong>
            <div className="moonIcon-and-DarkModeText">
                <label htmlFor="">
                    <input type="checkbox" name="theme"/>
                    <BiMoon className='fas'/>
                </label>
                <span className="darkMode">Dark Mode</span>
            </div>

                
                    
                
            
            
                
                
        </div>
    
    )
}

export default Header
