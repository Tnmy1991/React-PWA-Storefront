import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/page/Home.js';
import Category from './components/page/Category.js';

class WooRouter extends React.Component {
	render() {
		return(
			<Router>
				<Switch>
	        		<Route exact path="/" component={Home} />
	        		<Route path="/category/:slug" component={Category} />
        		</Switch>
        	</Router>
		);
	}
}

export default WooRouter;