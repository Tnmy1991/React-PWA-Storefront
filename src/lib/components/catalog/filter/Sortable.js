import React from 'react';
import { Link } from "react-router-dom";
import { WooContext } from '../../../auth/Auth';

class Sortable extends React.Component {
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
			<div className="row">
        <div className="col-md-12 mb-5">
          <div className="float-md-left mb-4"><h2 className="text-black h5">{ this.props.title }</h2></div>
          <div className="d-flex">
						<div className="dropdown mr-1 ml-md-auto">
							<button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Latest
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
								{categories.map(category => (
									<Link to={category.slug} className="dropdown-item" key={category.id}>{category.name}</Link>
								))}
							</div>
						</div>
            <div className="btn-group">
              <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">Reference</button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                <a className="dropdown-item" href="#">Relevance</a>
                <a className="dropdown-item" href="#">Name, A to Z</a>
                <a className="dropdown-item" href="#">Name, Z to A</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Price, low to high</a>
                <a className="dropdown-item" href="#">Price, high to low</a>
              </div>
            </div>
          </div>
        </div>
      </div>
		);
	}
}

export default Sortable;