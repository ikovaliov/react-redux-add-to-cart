import React from 'react';
import './ProductListItem.css';

const ProductListItem = ({ product, onAddedToCart }) => {
  const { title, brand, price, productImage } = product;
  return (
    <div className='product-list-item'>
      <div className='product-image'>
        <img src={productImage} alt='img' />
      </div>
      <div className='product-details'>
        <span className='product-title'>{title}</span>
        <div className='product-brand'>
          Brand: <strong>{brand}</strong>
        </div>
        <div className='product-price'>{price} €</div>
        <button onClick={onAddedToCart} className='btn btn-success add-to-cart'>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductListItem;
