import { combineReducers } from "redux";
import { getDetailReducer, loadDataReducer } from "../Reducer/reducer";

const rootReducer = combineReducers({
    loadCountries : loadDataReducer,
    getDetailData : getDetailReducer
})

export {rootReducer}