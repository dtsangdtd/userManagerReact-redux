import { combineReducers } from "redux";
import gioHangReducer from "./gioHangReducer";
import userReducer from "./../../Usermanagerment/modules/reducer";

const rootReducer = combineReducers({
  // reducer con
  //   gioHangreducer : gioHangreducer,
  gioHangReducer,
  userReducer,
});

export default rootReducer;
