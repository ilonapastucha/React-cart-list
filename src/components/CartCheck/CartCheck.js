import React, { useEffect, useState } from 'react';
import { CartApiService } from '../../api';

export const CartContext = React.createContext({});

const CartCheck = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const checkProduct = async ({ pid, quantity }) => {
    const response = await CartApiService.checkProductApi({ pid, quantity });
    if (response.isError) {
      setProducts(
        products.map((item) => ({
          ...item,
          quantity: item.pid === pid ? item.min : item.quantity
        }))
      );
    }
  };

  useEffect(() => {
    setTotal(products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2));
  }, [products]);

  useEffect(() => {
    CartApiService.getCartApi().then((data) => {
      setProducts(
        data.map((item) => ({
          ...item,
          quantity: item.min
        }))
      );
    });
  }, []);

  const increase = ({ pid }) => {
    setProducts(
      products.map((item) => ({
        ...item,
        quantity: item.pid === pid ? item.quantity + 1 : item.quantity
      }))
    );
  };

  const decrease = async ({ pid }) => {
    setProducts(
      products.map((item) => ({
        ...item,
        quantity: item.pid === pid ? item.quantity - 1 : item.quantity
      }))
    );
  };

  const contextValues = {
    total,
    increase,
    decrease,
    products,
    checkProduct
  };

  return <CartContext.Provider value={contextValues}>{children}</CartContext.Provider>;
};

export default CartCheck;
