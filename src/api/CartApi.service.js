const CartApiService = {
  checkProductApi: ({ pid, quantity }) =>
    fetch('/api/product/check', {
      method: 'POST',
      body: JSON.stringify({
        pid,
        quantity
      })
    }).then((response) => response.json()),
  getCartApi: () => fetch('/api/cart').then((response) => response.json())
};

export default CartApiService;
