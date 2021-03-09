import axios from "axios"
import { COUNTRIES, COUNTRIES_DETAILS, SEARCH_COUNTRIES, SEARCH_INPUT_VALUE } from "../Constants"

const loadData = () => async (dispatch, getState) => {
    dispatch({type: COUNTRIES.LOAD_DATA});

    try {
        const response = await axios.get('https://restcountries.eu/rest/v2/all');
        const {data} = response
        dispatch({type: COUNTRIES.LOAD_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: COUNTRIES.LOAD_ERROR, error})
    }
};


const getDetails = (name) => async dispatch => {
    dispatch({type: COUNTRIES_DETAILS.GET_DATA});

    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
        const {data} = response
        dispatch({type: COUNTRIES_DETAILS.GET_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: COUNTRIES_DETAILS.GET_ERROR, error})
    }
}

const getSearchDetails = (countryName) => async dispatch => {
    dispatch({type: SEARCH_COUNTRIES.SEARCH_DATA});

    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`);
        const {data} = response
        dispatch({type: SEARCH_COUNTRIES.SEARCH_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: SEARCH_COUNTRIES.SEARCH_ERROR, error})
    }
}

const change = (playload) => ({
    type : SEARCH_INPUT_VALUE.CHANGE,
    // payload:e.target.value
    payload: playload
})

const submit = (payload) =>  ({
    type: SEARCH_INPUT_VALUE.SUBMIT ,
    payload: payload
})


export {loadData, getDetails, getSearchDetails, change, submit}