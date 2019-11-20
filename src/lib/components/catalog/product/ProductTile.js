import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";

class ProductTile extends React.Component {
	render() {
		return(
			<div className="item">
				<div className="block-4 text-center">
				  <figure className="block-4-image">
				  	{this.props.data.images.slice(0, 1).map(thumb => (
				    	<img src={thumb.src} alt="{thumb.name}" className="img-fluid" key={thumb.id} />
				    ))}
				  </figure>
				  <div className="block-4-text p-4">
				    <h3>
				    	<Link to={'/shop/' + this.props.data.slug}>{this.props.data.name}</Link>
				    </h3>
				    <p className="mb-0">
				    	{this.props.data.categories.map(category => (
				    		category.name + " "
				    	))}
				    </p>
				    <p className="text-primary font-weight-bold">{ReactHtmlParser(this.props.data.price_html)}</p>
				  </div>
				</div>
			</div>
		);
	}
}

export default ProductTile;