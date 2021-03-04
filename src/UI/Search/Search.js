import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi";

const Search = () => {
    return (
        <div className='search-input'>
            <BiSearchAlt2 className='search-icon'/>
            <input type="text" placeholder="Search for a country..."> 
            </input>
        </div>
    )
}

export default Search
