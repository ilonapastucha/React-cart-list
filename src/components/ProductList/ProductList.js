import React from 'react';
import Product from '../Product/Product';
import { useCart } from '../../hooks';

const ProductList = () => {
  const { products, total } = useCart();
  return (
    <>
      <h2>Lista produktów</h2>
      <ul>
        {products?.map((item) => (
          <Product key={item.pid} {...item} />
        ))}
        <div className='cartItemsSummaryDetails'> 
          <p>Razem: </p>
          <p className='detailsTotal'>{total.toString().replace('.', ',')} zł</p>
        </div>
        
      </ul>
    </>
  );
};

export default ProductList;
