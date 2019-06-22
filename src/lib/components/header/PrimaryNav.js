import React from 'react';
import { BrowserRouter as Router, Redirect, Link  } from "react-router-dom";

class PrimaryNav extends React.Component {
	render() {
		return(
			<nav className="site-navigation text-right text-md-center" role="navigation">
		        <div className="container">
		        	<Router>
		        		<ul className="site-menu js-clone-nav d-none d-md-block">
		        			<li><Link to="/">Shop</Link></li>
		        			<li><Link to="/category/tshirts">Tshirts</Link></li>
		        			<li><Link to="/category/hoodies">Hoodies</Link></li>
		        			<li><Link to="/category/accessories">Accessories</Link></li>
		        		</ul>
		        	</Router>
		        </div>
      		</nav>
		);
	}
}

export default PrimaryNav;