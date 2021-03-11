import { combineReducers } from "redux";
import { changeReducer, getDetailReducer, getSearchDetailReducer, loadDataReducer, submitReducer, openDetailsReducer} from "../Reducer/reducer";

const rootReducer = combineReducers({
    loadCountries : loadDataReducer,
    getDetailData : getDetailReducer,
    getSearchData : getSearchDetailReducer,
    formData : changeReducer,
    searchData : submitReducer,
    openData: openDetailsReducer
})

export {rootReducer}