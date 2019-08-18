import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './containers/SignUp.jsx';
import SignIn from './containers/SignIn.jsx';
import DashBoard from './containers/DashBoard.jsx';
import AuthRouter from './components/AuthRouter.jsx';

function App() {
	return (
		<Router>
			<AuthRouter />
			<Switch>
				<Route exact path='/' component={SignUp} />
				<Route exact path='/signup' component={SignUp} />
				<Route exact path='/signin' component={SignIn} />
				<Route exact path='/dashboard' component={DashBoard} />
			</Switch>
		</Router>
	);
}

export default App;
