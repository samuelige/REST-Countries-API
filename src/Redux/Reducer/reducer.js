import { COUNTRIES, COUNTRIES_DETAILS } from "../Constants"

const listState = {
    countries : [],
    loading: false,
    error: null
}

const detailState = {
    countries : [],
    loading: false,
    error: null
}


const loadDataReducer = ( state= listState, action) => {
    switch (action.type) {
        case COUNTRIES.LOAD_DATA: 
            return {
                ...state,
                loading: true,
                error: null
            };
        case COUNTRIES.LOAD_SUCCESS: 
            return {
                ...state,
                loading: false,
                countries: action.payload
            };
        case COUNTRIES.LOAD_ERROR: 
            return {
                ...state,
                loading: false,
                error: action.error,
                countries: []
            };
        default: 
            return state;

    }
};

const getDetailReducer = ( state=detailState, action) => {
    switch (action.type) {
        case COUNTRIES_DETAILS.GET_DATA: 
            return {
                ...state,
                loading: true,
                error: null
            };
        case COUNTRIES_DETAILS.GET_SUCCESS: 
            return {
                ...state,
                loading: false,
                countries: action.payload
            };
        case COUNTRIES_DETAILS.GET_ERROR: 
            return {
                ...state,
                loading: false,
                error: action.error,
                countries: []
            };
        default: 
            return state;

    }
};

export {loadDataReducer, getDetailReducer}