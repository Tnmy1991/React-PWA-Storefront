import React from 'react';
import { Link } from "react-router-dom";
import { WooContext } from '../../../auth/Auth';

class Filter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			categories: [],
		};
	}

	static contextType = WooContext;

	componentDidMount(){
		let ref = this;
		let contextRef = this.context;
		contextRef.get('products/categories', function(err, data, res) {
			if(err) {
				ref.setState({
					error: true,
					categories: []
				});
			} else {
				ref.setState({
					error: null,
					categories: JSON.parse(res),
				});
			}
		});
	}

	render() {
		const { error, categories } = this.state;
		return(
      <React.Fragment>
        <div className="border p-4 rounded mb-4">
          <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
          <ul className="list-unstyled mb-0">
            {categories.map(item => (
              <li className="mb-1" key={item.id}>
                <Link to={item.slug} className="d-flex"><span>{item.name}</span> <span className="text-black ml-auto">({item.count})</span></Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="border p-4 rounded mb-4">
          <div className="mb-4">
            <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
            <div id="slider-range" className="border-primary"></div>
            <input type="text" name="text" id="amount" className="form-control border-0 pl-0 bg-white" disabled="" />
          </div>
        </div>
      </React.Fragment>
		);
	}
}

export default Filter;