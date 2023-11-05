export const ADD = (item, size) => {
  return {
    type: "ADD_CART",
    payload: { item, size },
  };
};

export const RMV = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

export const DLT = (id) => {
  return {
    type: "DELETE_CART",
    payload: id,
  };
};
