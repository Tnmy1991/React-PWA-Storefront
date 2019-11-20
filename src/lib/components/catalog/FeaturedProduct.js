import React from 'react';
import { WooContext } from '../../auth/Auth';
import ProductTile from './product/ProductTile';

class FeaturedProduct extends React.Component {
	constructor(props) {
		super(props);
	    this.state = {
			error: null,
			items: []
	    };
  	}

	static contextType = WooContext;

	componentDidMount(){
		let ref = this;
		this.context.get('products?featured=1', function(err, data, res) {
			if(err) {
				ref.setState({
		            error: true,
		            items: []
	          	});
			} else {
				ref.setState({
		            error: null,
		            items: JSON.parse(res)
	          	});
			}
		});
	}

	render() {
		const { error, items } = this.state;
		return(
			<div className="site-section block-3 site-blocks-2 bg-light">
		      <div className="container">
		        <div className="row justify-content-center">
		          <div className="col-md-7 site-section-heading text-center pt-4">
		            <h2>Featured Products</h2>
		          </div>
		        </div>
		        <div className="row">
		          <div className="col-md-12">
		            <div className="nonloop-block-3 owl-carousel">
		            	{items.map(item => (
		            		<ProductTile key={item.id} data={item} />
          				))}
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		);
	}
}

export default FeaturedProduct;