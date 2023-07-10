import { combineReducers } from "redux";
import userReducer from "./users/usersReduscer";

// import numberReducer from "./number/numberReducer";
// import counterReducer from "./counter/counterReducer";

const rootReducer = combineReducers({
  users: userReducer,
});
export default rootReducer;
