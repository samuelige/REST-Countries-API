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

    

    const handleChange = (e) => {
        dispatch(change(e.target.value))
        history.push('/searchResult')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submit(`${searchContent.search}`))
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
