import { combineReducers } from "redux"
import AuthReducer from "./auth"
import CardData from "./card"

export default combineReducers({AuthReducer, CardData})