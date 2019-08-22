import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Components
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import ProductService from './services/ProductService';
import { ProductServiceProvider } from './components/product-service-context';

import store from './store';

const productService = new ProductService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ProductServiceProvider value={productService}>
        <Router>
          <App />
        </Router>
      </ProductServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
