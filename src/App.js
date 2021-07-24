import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';

//screens
import Login from './Login';
import MyEvents from './MyEvents';
import ChangeEvent from './ChangeEvent';
import Profile from "./Profile";
import BlueButton from "./components/BlueButton";

const App = () => {
	return (
		<div className="App">
			<Router>
				<div>
					<Switch>
						<Route path="/login">
							<RouteLogin />
						</Route>
						<Route path="/changeEvent">
							<RouteChangeEvent />
						</Route>
						<Route path="/myEvents">
							<RouteMyEvents />
						</Route>
						<Route path="/">
							Ты кто такой, я вас не звал, идите надолго
							<BlueButton buttonContent={'asdasd'} onClick={() => {alert('Im clicked')}} />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

function RouteLogin() {
	return <Login />;
}

function RouteProfile() {
	return <Profile />;
}

function RouteMyEvents() {
	return <MyEvents />;
}

function RouteChangeEvent() {
	return <ChangeEvent />;
}

export default App;
