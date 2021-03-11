import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import CountryDetails from '../CountryDetails/CountryDetails'
import CountryList from '../CountryList/CountryList'
import searchResult from '../Search-Result/searchResult'

const Navigator = () => {
    return (
        <Switch>
            <Route path={'/'} exact component={CountryList}/>
            <Route path={'/countryDetails/:countryDetails'} exact component={CountryDetails}/>
            <Route path={'/searchResult/:searchResult'} exact component={searchResult} />
            <Redirect to={'/'}/>
        </Switch>
    )
}

export default Navigator
