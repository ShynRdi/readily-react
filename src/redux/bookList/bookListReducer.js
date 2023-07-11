import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_RESET,
} from "./bookListAction";

const initialState = {
  list: [], // Initialize with an empty array
  loading: false,
  error: null,
};

const bookListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_BOOKS_RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default bookListReducer;
