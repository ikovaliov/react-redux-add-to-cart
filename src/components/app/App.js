import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

//Components
import Header from '../header';
import ShoppingCartTable from '../shopping-cart-table/index';
import { HomePage, CartPage } from '../pages';

const App = () => {
  return (
    <main role='main' className='container'>
      <Header numItems={5} total={210} />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/cart' component={CartPage} />
      </Switch>
      <ShoppingCartTable />
    </main>
  );
};

export default App;
