import React from 'react';
import { WooContext } from '../../auth/Auth';

class CategoryTiles extends React.Component {
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
		this.context.get('products/categories', function(err, data, res) {
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
			<div className="site-section site-blocks-2">
		      <div className="container">
		        <div className="row">
		        	{items.map(item => (
		        		<div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay="" key={item.slug}>
							<a className="block-2-item" href="#">
							  <figure className="image">
							    <img src={item.image.src} alt="{item.image.name}" className="img-fluid" />
							  </figure>
							  <div className="text">
							    <span className="text-uppercase">Collections</span>
							    <h3>{item.name}</h3>
							  </div>
							</a>
						</div>
		        	))}
		        </div>
		      </div>
		    </div>
		);
	}
}

export default CategoryTiles;