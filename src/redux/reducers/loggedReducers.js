import loggedActions from "../actions/loggedActions";
const loggedReducer = (state = false, action) => {
	switch (action.type) {
		case loggedActions.loggedIn().type:
			return true;
		case loggedActions.notLoggedIn().type:
			return false;
		default:
			return state;
	}
};
export default loggedReducer;
