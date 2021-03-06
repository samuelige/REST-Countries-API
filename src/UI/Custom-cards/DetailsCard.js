import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { useHistory } from 'react-router';

const DetailsCard = ({otherprops}) => {

    let history = useHistory();

    const handleClose =() => {
        history.push("/");
    }

    return (
        <div className="country-details-container" >
            <div className="country-details-btn">
                <BiArrowBack className="arrow"/>
                <button onClick={handleClose}> Back</button>
            </div>
                    
            <div className="country-details">
                <img src={otherprops.flag} alt="country flag"/>
                <div className="details-container">
                    <div className="details">
                        <h1>{otherprops.name}</h1>
                        <div className="details-content">
                            <div className="left-content">
                                <h5>Native Name: <span className="item">{otherprops.nativeName}</span></h5>
                                <h5>Population: <span className="item">{otherprops.population}</span></h5>
                                <h5>Region: <span className="item">{otherprops.region}</span></h5>
                                <h5>Sub Region: <span className="item">{otherprops.subregion}</span></h5>
                                <h5>Capital: <span className="item">{otherprops.capital}</span></h5>
                            </div>
                            <div className="right-content">
                                <h5>Top Level Domain: <span className="item">{otherprops.topLevelDomain[0]}</span></h5>
                                <h5>Currencies: <span className="item">{otherprops.currencies[0].code}, {otherprops.currencies[0].name}, {otherprops.currencies[0].symbol}</span></h5>
                                <h5>Languages: <span className="item">{otherprops.languages[0].name}, {otherprops.languages[1].name}, {otherprops.languages[2].name}</span></h5>
                            </div>
                        </div>
                        <h5>Border Countries: <span className="item border-countries">{otherprops.borders[0]}</span> 
                            <span className="item border-countries">{otherprops.borders[1]}</span> 
                            <span className="item border-countries">{otherprops.borders[2]}</span>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsCard