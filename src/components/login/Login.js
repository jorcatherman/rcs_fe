import { useDispatch, useSelector } from "react-redux";
import loggedActions from "../../redux/actions/loggedActions";
function Login() {
	const isLogged = useSelector((State) => State.isLogged);
	const dispatch = useDispatch();
	return (
		<div>
			Login Page!
			<div>
				<button
					onClick={() => {
						dispatch(loggedActions.loggedIn());
					}}
				>
					Login
				</button>
			</div>
			<div>
				<button
					onClick={() => {
						dispatch(loggedActions.notLoggedIn());
					}}
				>
					Logout
				</button>
			</div>
			<div>isLogged value is: {isLogged + ""}</div>
		</div>
	);
}
export default Login;
