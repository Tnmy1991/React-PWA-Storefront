import React from 'react';
import { Link } from "react-router-dom";
import PrimaryNav from './header/PrimaryNav.js';
import SearchForm from './header/SearchForm.js';

class Header extends React.Component {
	render() {
		return(
			<header className="site-navbar" role="banner">
		      <div className="site-navbar-top">
		        <div className="container">
		          <div className="row align-items-center">
		            <SearchForm />
		            <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
		              <div className="site-logo">
										<Link to="/" className="js-logo-clone">Shoppers</Link>
		              </div>
		            </div>
		            <div className="col-6 col-md-4 order-3 order-md-3 text-right">
		              <div className="site-top-icons">
		                <ul>
		                  <li><Link to="/my-account"><span className="icon icon-person"></span></Link></li>
		                  <li><Link to="/wishlist"><span className="icon icon-heart-o"></span></Link></li>
		                  <li>
		                    <Link to="/basket" className="site-cart">
		                      <span className="icon icon-shopping_cart"></span>
		                      <span className="count">2</span>
		                    </Link>
		                  </li> 
		                  <li className="d-inline-block d-md-none ml-md-0">
												<a href="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu"></span></a>
											</li>
		                </ul>
		              </div> 
		            </div>
		          </div>
		        </div>
		      </div> 
		      <PrimaryNav />
		    </header>
		);
	}
}

export default Header;