import React from 'react';
import './App.css';
import ProductList from '../ProductList/ProductList';
import CartCheck from '../CartCheck/CartCheck';

const App = () => {
  return (
    <CartCheck>
      <div className='container'>
        <ProductList />
      </div>
    </CartCheck>
  );
};

export { App };
