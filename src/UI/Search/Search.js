import React, { useEffect, useState } from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { change, submit } from '../../Redux/Actions';

const Search = () => {
   
    const dispatch = useDispatch()
    let history = useHistory()

    const searchContent = useSelector(state => state.formData)
    console.log(searchContent.search)

    const searchResultState = useSelector(state => state.searchData)
    console.log(searchResultState)
 

    const handleChange = (e) => {
        dispatch(change(e.target.value))
        
        // history.push(`/searchResult/${searchResultState.searchResult}`)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submit(searchContent.search))
        history.push(`/searchResult/:searchResult`)
        dispatch(change(" "));
    }

    return (
        <form className='search-input'  onSubmit={handleSubmit}>
            <BiSearchAlt2 className='search-icon'/>
                <input type="text" 
                placeholder="Search for a country..." 
                name="search" 
                value={searchContent.search} 
                onChange={handleChange}
                /> 
            
        </form>
    )
}

export default Search
