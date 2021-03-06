import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import CountryDetails from '../CountryDetails/CountryDetails'
import CountryList from '../CountryList/CountryList'

const Navigator = () => {
    return (
        <Switch>
            <Route path={'/'} exact component={CountryList}/>
            <Route path={'/countryDetails/:countryDetails'} exact component={CountryDetails}/>
            <Redirect to={'/'}/>
        </Switch>
    )
}

export default Navigator
