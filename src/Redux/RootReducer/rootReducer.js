import { combineReducers } from "redux";
import { loadDataReducer } from "../Reducer/reducer";

const rootReducer = combineReducers({
    loadCountries : loadDataReducer
})

export {rootReducer}