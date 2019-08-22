import React from 'react';
import { ProductServiceConsumer } from '../product-service-context';

const withProductService = () => Wrapped => {
  return props => {
    return (
      <ProductServiceConsumer>
        {productService => {
          return <Wrapped {...props} productService={productService} />;
        }}
      </ProductServiceConsumer>
    );
  };
};

export default withProductService;
