import React from 'react';
import Banner from '../home/Banner.js';
import Offers from '../home/Offers.js';
import CategoryTiles from '../catalog/CategoryTiles.js';
import FeaturedProduct from '../catalog/FeaturedProduct.js';

class Home extends React.Component {
	render() {
		return(
			<React.Fragment>
				<Banner />
			    <div className="site-section site-section-sm site-blocks-1">
			      <div className="container">
			        <div className="row">
			          <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="">
			            <div className="icon mr-4 align-self-start">
			              <span className="icon-truck"></span>
			            </div>
			            <div className="text">
			              <h2 className="text-uppercase">Free Shipping</h2>
			              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
			            </div>
			          </div>
			          <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="100">
			            <div className="icon mr-4 align-self-start">
			              <span className="icon-refresh2"></span>
			            </div>
			            <div className="text">
			              <h2 className="text-uppercase">Free Returns</h2>
			              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
			            </div>
			          </div>
			          <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200">
			            <div className="icon mr-4 align-self-start">
			              <span className="icon-help"></span>
			            </div>
			            <div className="text">
			              <h2 className="text-uppercase">Customer Support</h2>
			              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    <CategoryTiles />
			    <FeaturedProduct />
			    <Offers />
		    </React.Fragment>
		);
	}
}

export default Home;