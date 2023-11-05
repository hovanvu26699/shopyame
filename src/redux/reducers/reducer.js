const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const itemIndex_add = state.carts.findIndex(
        (item) => item.id === action.payload.item.id
      );
      if (itemIndex_add >= 0) {
        state.carts[itemIndex_add].qty += 1;
        return {
          ...state,
          carts: [...state.carts],
        };
      } else {
        const temp = {
          ...action.payload.item,
          qty: 1,
          size: action.payload.size,
        };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "DELETE_CART":
      const itemIndex_del = state.carts.findIndex(
        (item) => item.id === action.payload
      );
      if (state.carts[itemIndex_del].qty >= 2) {
        state.carts[itemIndex_del].qty -= 1;
        return {
          ...state,
          carts: [...state.carts],
        };
      } else {
        const data = state.carts.filter((el) => el.id !== action.payload);
        return {
          ...state,
          carts: data,
        };
      }

    case "RMV_CART":
      const data = state.carts.filter((el) => el.id !== action.payload);

      return {
        ...state,
        carts: data,
      };

    default:
      return state;
  }
};
