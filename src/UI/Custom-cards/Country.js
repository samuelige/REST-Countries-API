import React, { Fragment } from 'react'
import { useState } from 'react'
import { BiArrowBack } from "react-icons/bi";

const Country = () => {
    const [state, setState] = useState(false)

    const handleOPen =() => {
        setState(true)
    }

    const handleClose =() => {
        setState(false)
    }
    

    return (
        <Fragment>
            {
                !state ? (
                    <div className="country" onClick={handleOPen}>
                        <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="country flag"/>
                        <div className="content">
                            <h2>Lorem.</h2>
                            <div className="other-content">
                                <h5>Population: <span className="item">Lorem.</span></h5>
                                <h5>Region: <span className="item">Lorem.</span></h5>
                                <h5>Capital: <span className="item">Lorem.</span></h5>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="country-details-container">
                        <div className="country-details-btn">
                            <BiArrowBack className="arrow"/>
                            <button onClick={handleClose}> Back</button>
                        </div>
                        
                        <div className="country-details">
                            <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="country flag"/>
                            <div className="details-container">
                                <div className="details">
                                    <h1>Lorem.</h1>
                                    <div className="details-content">
                                        <div className="left-content">
                                            <h5>Native Name: <span className="item">Lorem.</span></h5>
                                            <h5>Population: <span className="item">Lorem.</span></h5>
                                            <h5>Region: <span className="item">Lorem.</span></h5>
                                            <h5>Sub Region: <span className="item">Lorem.</span></h5>
                                            <h5>Capital: <span className="item">Lorem.</span></h5>
                                        </div>
                                        <div className="right-content">
                                            <h5>Top Level Domain: <span className="item">Lorem.</span></h5>
                                            <h5>Currencies: <span className="item">Lorem.</span></h5>
                                            <h5>Languages: <span className="item">Lorem.</span></h5>
                                        </div>
                                    </div>
                                    <h5>Border Countries: <span className="item border-countries">Lorem.</span> <span className="item border-countries">Lorem.</span> <span className="item border-countries">Lorem.</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        
        
        </Fragment>
    )
}

export default Country
