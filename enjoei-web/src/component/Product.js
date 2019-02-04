import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/product.css';

class Product extends Component {
  render() {
    return (
        <div className="main">
            <div className="img-product">
                <img src={this.props.image} alt="imag" title={this.props.title} />
            </div> 
        </div>    
    );
  }
}

Product.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default Product;
