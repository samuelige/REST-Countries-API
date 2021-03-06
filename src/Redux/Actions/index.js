import axios from "axios"
import { COUNTRIES, COUNTRIES_DETAILS } from "../Constants"

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

export {loadData, getDetails}