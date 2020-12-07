import ProductQuantity from '../ProductQuantity/ProductQuantity';
import React from 'react';

const Product = ({ pid, quantity, min, max, isBlocked, name, price }) => (
  <li key={pid} className='row'>
    <div className='productName'>{name}</div> 
    <ProductQuantity quantity={quantity} pid={pid} min={min} max={max} isBlocked={isBlocked} />
    <div className='cartItemPrice'>
      <p>Cena: </p>
      <p className='itemPrice'>{price.toString().replace('.', ',')}zł/szt</p>
    </div>
      
  </li>
);

export default Product;
