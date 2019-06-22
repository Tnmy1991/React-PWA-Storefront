import React from 'react';
import { WooContext } from '../../auth/Auth';
import { BrowserRouter as Router, Redirect, Link  } from "react-router-dom";

class Category extends React.Component {
	constructor(props) {
		super(props);
	    this.state = {
			error: null,
			category: '',
			items: []
	    };
  	}

	static contextType = WooContext;

	componentDidMount(){
		let ref = this;
		let contextRef = this.context;
		const { match } = ref.props;

		contextRef.get('products/categories?slug='+match.params.slug, function(err, data, res) {
			if(err) {
				ref.setState({
		            error: true,
		            items: []
	          	});
			} else {
				JSON.parse(res).forEach(function(data){
					let category = data.name;
				  	contextRef.get('products/?category='+data.id, function(err, data, res) {
						if(err) {
							ref.setState({
					            error: true,
					            items: []
				          	});
						} else {
							ref.setState({
					            error: null,
					            category: category,
					            items: JSON.parse(res)
				          	});
						}
					});
				});
			}
		});
	}

	render() {
		const { error, category, items } = this.state;
		console.log(category);
		return(
			<React.Fragment>
				<div className="bg-light py-3">
			      <div className="container">
			        <div className="row">
			          <div className="col-md-12 mb-0">
			          	<Router>
			          		<Link to="/">Home</Link>
			          	</Router> 
			          	<span className="mx-2 mb-0">/</span> 
			          	<strong className="text-black">{category}</strong>
			          </div>
			        </div>
			      </div>
			    </div>
		    </React.Fragment>
		);
	}
}

export default Category;