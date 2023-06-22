import { combineReducers } from "redux"
import AuthReducer from "./auth"
import CardData from "./card"
import addressReducer from "./address"

export default combineReducers({AuthReducer, CardData, addressReducer})