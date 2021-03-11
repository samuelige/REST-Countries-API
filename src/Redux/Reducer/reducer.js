import { COUNTRIES, COUNTRIES_DETAILS, SEARCH_COUNTRIES, SEARCH_INPUT_VALUE } from "../Constants"

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

const searchDetailState = {
    countries : [],
    loading: false,
    error: null
}

const formState = {
    search: ''
}

const resultState = {
    searchResult: ''
}

const openState = {
    open : 'true'
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

const getSearchDetailReducer = ( state=searchDetailState, action) => {
    switch (action.type) {
        case SEARCH_COUNTRIES.SEARCH_DATA: 
            return {
                ...state,
                loading: true,
                error: null
            };
        case SEARCH_COUNTRIES.SEARCH_SUCCESS: 
            return {
                ...state,
                loading: false,
                countries: action.payload
            };
        case SEARCH_COUNTRIES.SEARCH_ERROR: 
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

const changeReducer = (state = formState, action) => {
    switch(action.type) {
        case SEARCH_INPUT_VALUE.CHANGE :
            return {
                ...state,
                search: action.payload
            }
        default:
            return state;
    }
}


const submitReducer = (state= resultState, action) => {
    switch(action.type) {
        case SEARCH_INPUT_VALUE.SUBMIT :
            return {
                ...state,
                searchResult: action.payload
            } 
        default:
            return state;  
    }
    
}

const openDetailsReducer = (state = openState, action) => {
    switch(action.type) {
        case COUNTRIES.OPEN_COUNTRY_DETAILS: 
            return {
                ...state,
                open: action.payload
            }
        default:
            return state
    }
}

export {
    loadDataReducer, 
    getDetailReducer, 
    getSearchDetailReducer, 
    changeReducer, 
    submitReducer,
    openDetailsReducer
}