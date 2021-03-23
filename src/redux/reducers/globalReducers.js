import loggedReducer from "../reducers/loggedReducers";
import { combineReducers } from "redux";

const globalState = combineReducers({
	isLogged: loggedReducer,
});
export default globalState;
