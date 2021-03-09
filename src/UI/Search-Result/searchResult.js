import _ from 'lodash'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchDetails, submit } from '../../Redux/Actions'
import ListCard from '../Custom-cards/ListCard'


const SearchResult = () => {
    const searchContent = useSelector(state => state.searchData.searchResult)
    console.log(searchContent);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSearchDetails( searchContent))
    }, [dispatch])


    const searchInputResult = useSelector(state => state.getSearchData.countries)
    // console.log(searchInputResult);

    return (
        <div className="country-list">
            {
                !_.isEmpty(searchInputResult) ? (
                    searchInputResult.map(({...otherprops}) => {
                        return (
                            <ListCard otherprops={otherprops} />
                        )
                    })
                ) : null
            }
        </div>
    )
}

export default SearchResult
