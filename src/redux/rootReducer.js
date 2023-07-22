import { combineReducers } from "redux";
import userReducer from "./users/usersReducer";
import bookListReducer from "./bookList/bookListReducer";
import signUserReducer from "./signUpUsers/signUpUsersReducers";

const rootReducer = combineReducers({
  users: userReducer,
  books: bookListReducer,
  signs: signUserReducer,
});
export default rootReducer;
