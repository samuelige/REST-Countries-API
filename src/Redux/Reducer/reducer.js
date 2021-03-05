import { COUNTRIES } from "../Constants"

const initialState = {
    countries : [],
    loading: false,
    error: null
}

const loadDataReducer = ( state= initialState, action) => {
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

export {loadDataReducer}