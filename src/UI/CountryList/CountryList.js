import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from "lodash";
import { loadData } from '../../Redux/Actions'
import ListCard from '../Custom-cards/ListCard'


const CountryList = () => {
    const content = useSelector (state => state.loadCountries.countries)
    console.log(content);
    return (
        <div className="country-list">
            {
                !_.isEmpty(content) ? (
                    content.map(({...otherprops}) => {
                        return (
                            <ListCard otherprops={otherprops}/>
                        )
                    })
                ) : null

            }
            
        </div>
    )
}

export default CountryList