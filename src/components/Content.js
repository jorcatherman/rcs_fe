import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Login from "./login/Login";
function Content() {
	let loggedIn = false;
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					{!loggedIn && <Redirect to="/login" />}
				</Route>
				<Route exact path="/login">
					<Login></Login>
				</Route>
			</Switch>
		</Router>
	);
}
export default Content;
