import { combineReducers } from "redux";
import userReducer from "./users/usersReducer";
import bookListReducer from "./bookList/bookListReducer";
// import

// import numberReducer from "./number/numberReducer";
// import counterReducer from "./counter/counterReducer";

const rootReducer = combineReducers({
  users: userReducer,
  books: bookListReducer,
});
export default rootReducer;
