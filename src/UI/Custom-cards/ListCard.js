import React, { Fragment } from 'react'
// import { useState } from 'react'
import { BiArrowBack } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { openDetails } from '../../Redux/Actions';

const ListCard = ({otherprops}) => {
    let history = useHistory();
    const dispatch = useDispatch();
    const handleOPen =() => {
        history.push(`/countryDetails/${otherprops.name}`);
        dispatch(openDetails(false))
    }

    
    return (
        <div className="country" onClick={handleOPen} >
            <img src={otherprops.flag} alt="country flag"/>
            <div className="content">
                <h2>{otherprops.name}</h2>
                <div className="other-content">
                    <h5>Population: <span className="item">{otherprops.population}</span></h5>
                    <h5>Region: <span className="item">{otherprops.region}</span></h5>
                    <h5>Capital: <span className="item">{otherprops.capital}</span></h5>
                </div>
            </div>
        </div>
    )
}

export default ListCard
