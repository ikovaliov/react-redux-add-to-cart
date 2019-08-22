import React, { Component } from 'react';
import ProductListItem from '../product-list-item';
import { connect } from 'react-redux';

import { withProductService } from '../hoc';
import { fetchProducts, productAddedToCart } from '../../actions';
import { compose } from '../../utils';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import './ProductList.css';

const ProductList = ({ products, onAddedToCart }) => {
  return (
    <ul className='product-list'>
      {products.map(product => {
        return (
          <li key={product.id}>
            <ProductListItem
              product={product}
              onAddedToCart={() => onAddedToCart(product.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

class ProductListContainer extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products, loading, error, onAddedToCart } = this.props;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }

    return <ProductList products={products} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ productList: { products, loading, error } }) => {
  return { products, loading, error };
};

const mapDispatchToProps = (dispatch, { productService }) => {
  return {
    fetchProducts: fetchProducts(productService, dispatch),
    onAddedToCart: id => dispatch(productAddedToCart(id))
  };
};

export default compose(
  withProductService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ProductListContainer);
