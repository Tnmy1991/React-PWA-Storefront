import React from 'react';
import { Link  } from "react-router-dom";

class PrimaryNav extends React.Component {
	render() {
		return(
			<nav className="site-navigation text-right text-md-center" role="navigation">
		        <div className="container">
							<ul className="site-menu js-clone-nav d-none d-md-block">
								<li><Link to="/">Shop</Link></li>
								<li><Link to="/tshirts">Tshirts</Link></li>
								<li><Link to="/hoodies">Hoodies</Link></li>
								<li><Link to="/accessories">Accessories</Link></li>
							</ul>
		        </div>
      		</nav>
		);
	}
}

export default PrimaryNav;