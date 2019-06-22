import React from 'react';
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
		                <a href="index.html" className="js-logo-clone">Shoppers</a>
		              </div>
		            </div>
		            <div className="col-6 col-md-4 order-3 order-md-3 text-right">
		              <div className="site-top-icons">
		                <ul>
		                  <li><a href="#"><span className="icon icon-person"></span></a></li>
		                  <li><a href="#"><span className="icon icon-heart-o"></span></a></li>
		                  <li>
		                    <a href="cart.html" className="site-cart">
		                      <span className="icon icon-shopping_cart"></span>
		                      <span className="count">2</span>
		                    </a>
		                  </li> 
		                  <li className="d-inline-block d-md-none ml-md-0"><a href="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu"></span></a></li>
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