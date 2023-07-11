import { combineReducers } from "redux";
import userReducer from "./users/usersReducer";
import bookListReducer from "./bookList/bookListReducer";
// import { } from "../actions/types";

const rootReducer = combineReducers({
  users: userReducer,
  books: bookListReducer,
});
export default rootReducer;
