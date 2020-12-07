import React, { useContext } from 'react';
import { CartContext } from './components/CartCheck/CartCheck';

export const useCart = () => useContext(CartContext);
