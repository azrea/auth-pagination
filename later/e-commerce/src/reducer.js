const reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let tempAmount = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + action.guide };
      }
      return cartItem;
    });

    return { ...state, cart: tempAmount };
  }

  if (action.type === "GET_TOTAL") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        cartTotal.amount += amount;

        const itemTotal = price * amount;

        cartTotal.total += itemTotal;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    return { ...state, total, amount };
  }

  if (action.type === "PAY_FOR_ITEMS") {
    let tempAmount = state.cart.map((cartItem) => {
      return { ...cartItem, amount: 0 };
    });

    return { ...state, cart: tempAmount };
  }
};

export default reducer;
