import React from 'react';
import { WooContext } from '../../auth/Auth';
import { Link } from "react-router-dom";

class CategoryTiles extends React.Component {
	constructor(props) {
		super(props);
	    this.state = {
			error: null,
			categories: []
	    };
  	}

	static contextType = WooContext;

	componentDidMount(){
		let ref = this;
		this.context.get('products/categories', function(err, data, res) {
			if(err) {
				ref.setState({
					error: true,
					categories: []
				});
			} else {
				ref.setState({
					error: null,
					categories: JSON.parse(res)
				});
			}
		});
	}
	render() {
		const { error, categories } = this.state;

		return(
			<div className="site-section site-blocks-2">
		      <div className="container">
		        <div className="row">
		        	{categories.map(category => (
		        		<div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay="" key={category.slug}>
									<div className="block-2-item">
										<figure className="image">
											<img src={category.image.src} alt="{category.image.name}" className="img-fluid" />
										</figure>
										<div className="text">
											<span className="text-uppercase">Collections</span>
											<h3>
												<Link to={category.slug}>{category.name}</Link>
											</h3>
										</div>
									</div>
								</div>
		        	))}
		        </div>
		      </div>
		    </div>
		);
	}
}

export default CategoryTiles;