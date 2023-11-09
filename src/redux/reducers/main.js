import { combineReducers } from "redux";
import { cartreducer, accountreducer } from "./reducer";

const rootred = combineReducers({
  cartreducer,
  accountreducer,
});

export default rootred;
