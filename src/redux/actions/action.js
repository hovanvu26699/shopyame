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

//////

export const LOGIN = (item) => {
  return {
    type: "LOG_IN",
    payload: item,
  };
};

export const LOGOUT = () => {
  return {
    type: "LOG_OUT",
    payload: "",
  };
};

export const SIGNUP = (item) => {
  return {
    type: "SIGN_UP",
    payload: item,
  };
};

export const UPDATEUSER = (item) => {
  return {
    type: "UPDATE_USER",
    payload: item,
  };
};
