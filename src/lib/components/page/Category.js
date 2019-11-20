import React from 'react';
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';
import { WooContext } from '../../auth/Auth';
import Sortable from "../catalog/filter/Sortable";
import Filter from "../catalog/filter/Filter";

class Category extends React.Component {
	constructor(props) {
		super(props);
	    this.state = {
				error: null,
				category: '',
				slug: '',
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
					slug: match.params.slug,
					items: []
				});
			} else {
				JSON.parse(res).forEach(function(data){
					let category = data.name;
					contextRef.get('products/?category='+data.id, function(err, data, response) {
						if(err) {
							ref.setState({
								error: true,
								slug: match.params.slug,
								items: []
							});
						} else {
							ref.setState({ 
								error: null,
								slug: match.params.slug,
								category: category,
								items: JSON.parse(response)
							});
						}
					});
				});
			}
		});
	}

	componentWillReceiveProps(nextProps) {
		let ref = this;
		let contextRef = this.context;
		const { match } = this.props;

		if (nextProps.match.params.slug !== match.params.slug){
			contextRef.get('products/categories?slug='+nextProps.match.params.slug, function(err, data, res) {
				if(err) {
					ref.setState({
						error: true,
						slug: nextProps.match.params.slug,
						items: []
					});
				} else {
					JSON.parse(res).forEach(function(data){
						let category = data.name;
							contextRef.get('products/?category='+data.id, function(err, data, response) {
							if(err) {
								ref.setState({
									error: true,
									slug: nextProps.match.params.slug,
									items: []
								});
							} else {
								ref.setState({
									error: null,
									slug: nextProps.match.params.slug,
									category: category,
									items: JSON.parse(response)
								});
							}
						});
					});
				}
			});
		}
	}

	render() {
		const { error, category, items } = this.state;
		return(
			<React.Fragment>

				<div className="bg-light py-3">
					<div className="container">
						<div className="row">
							<div className="col-md-12 mb-0">
								<Link to="/">Home</Link>
								<span className="mx-2 mb-0">/</span> 
								<strong className="text-black">{category}</strong>
							</div>
						</div>
					</div>
				</div>

				<div className="site-section">
      		<div className="container">
        		<div className="row mb-5">
          		<div className="col-md-9 order-2">
								<Sortable title={category} />
								<div className="row mb-5">
									{items.map(item => (
										<div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" key={item.id}>
											<div className="block-4 text-center border">
												<figure className="block-4-image">
													{item.images.slice(0, 1).map(thumb => (
														<img src={thumb.src} alt="{thumb.name}" className="img-fluid" key={thumb.id} />
													))}
												</figure>
												<div className="block-4-text p-4">
													<h3>
														<Link to={'/shop/' + item.slug}>{item.name}</Link>
													</h3>
													<p className="mb-0">{item.short_description}</p>
													<p className="text-primary font-weight-bold">{ReactHtmlParser(item.price_html)}</p>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
          		<div className="col-md-3 order-1 mb-5 mb-md-0">
								<Filter />
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Category;