import React from 'react';
import { Route } from "react-router-dom";
import Home from './components/page/Home';
import Category from './components/page/Category';
import Basket from './components/page/Basket';

class WooRouter extends React.Component {
	render() {
		return(
			<React.Fragment>
				<Route exact path="/" component={Home} />
				<Route exact path="/tshirts" component={Category} />
				<Route exact path="/hoodies" component={Category} />
				<Route exact path="/accessories" component={Category} />
				<Route exact path="/basket" component={Basket} />
			</React.Fragment>
		);
	}
}

export default WooRouter;