import React, { useEffect } from 'react';
import { useCart } from '../../hooks';
import { lodashDebounce } from '../../debounce';

const ProductQuantity = ({ min, max, isBlocked, quantity, pid }) => {
  const { increase, decrease, checkProduct } = useCart();

  const checkDebounced = lodashDebounce((...args) => checkProduct(...args), 400);

  useEffect(() => {
    checkDebounced({ pid, quantity });
  }, [quantity, pid]);

  const handleDecrease = () => {
    if (min === quantity) {
      return;
    }
    decrease({ pid });
  };

  const handleIncrease = () => {
    if (max === quantity) {
      return;
    }
    increase({ pid });
  };

  return (
    <div>
      <div className ="quantityBtnContainer">
        <button disabled={isBlocked} onClick={handleDecrease}>
          -
        </button>
        <button disabled={isBlocked} onClick={handleIncrease}>
          +
        </button>
      </div>
      <div>Obecnie masz {quantity} sztuk produktu</div>
    </div>
  );
};

export default ProductQuantity;
