import React from 'react';
import { WooContext } from '../../auth/Auth';

class SearchForm extends React.Component {
	constructor(props) {
		super(props);
	    this.state = {
			error: null,
			progress: false,
			result: []
	    };
	    this.handleQuery = this.handleQuery.bind(this);
  	}

  	static contextType = WooContext;

  	handleQuery(e) {
  		e.preventDefault();

  		let q = e.target.value;
  		let ref = this;
  		if(q.length < 2)
  			return false;

    	this.setState({progress: true});

		this.context.get('products?search='+e.target.value, function(err, data, res) {
			if(err) {
				ref.setState({
		            error: true,
		            progress: false,
		            result: []
	          	});
			} else {
				ref.setState({
		            error: null,
		            progress: false,
		            result: JSON.parse(res)
	          	});
			}
		});
  	}

	render() {
		const { error, progress, result } = this.state;

		return(
			<div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
              <form className="site-block-top-search">
                <span className="icon icon-search2"></span>
                <input 
                	type="text" 
                	className="form-control border-0" 
                	name="q" 
                	placeholder="Search"
                	disabled = {(progress)? "disabled" : ""}
                	onKeyUp={this.handleQuery} />
              </form>
            </div>
		);
	}
}

export default SearchForm;