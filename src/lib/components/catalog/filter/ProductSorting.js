import React from 'react';

class ProductSorting extends React.Component {
	render() {
		return(
      <div class="row">
        <div class="col-md-12 mb-5">
          <div class="float-md-left mb-4"><h2 class="text-black h5">{ this.props.category }</h2></div>
          <div class="d-flex">
            <div class="btn-group">
              <button type="button" class="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">Reference</button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                <a class="dropdown-item" href="#">Relevance</a>
                <a class="dropdown-item" href="#">Name, A to Z</a>
                <a class="dropdown-item" href="#">Name, Z to A</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Price, low to high</a>
                <a class="dropdown-item" href="#">Price, high to low</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductSorting; 