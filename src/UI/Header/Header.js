import React from 'react'
import { BiMoon } from "react-icons/bi";

import '../../index.css'

const Header = () => {
    return (
        <div className='header'>
            <strong>Where in the world?</strong>
            <div className="moonIcon-and-DarkModeText">
                <label htmlFor="">
                    <input type="checkbox" name="theme"/>
                    <BiMoon className='fas'/>
                </label>
                <div className="darkMode">Dark Mode</div>
            </div>    
        </div>
    
    )
}

export default Header
