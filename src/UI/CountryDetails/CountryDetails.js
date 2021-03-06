import _ from 'lodash';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../Redux/Actions';
import DetailsCard from '../Custom-cards/DetailsCard'

const CountryDetails = (props) => {
    const countriesName = props.match.params.countryDetails; // From react-router... console.log("props", props);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetails(countriesName))
    }, [])

    
    const detailsContent = useSelector(state => state.getDetailData.countries)
    console.log(detailsContent)


    return (
        <div>
            {
                !_.isEmpty(detailsContent) ? (
                    detailsContent.map(({...otherprops}) => {
                        return (
                            <DetailsCard otherprops={otherprops}/>
                        )
                    })
                ): null
            }
            
        </div>
    )
}

export default CountryDetails
