import axios from "axios";

// Action Types
export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";
export const FETCH_BOOKS_RESET = "FETCH_BOOKS_RESET";

// Action Creators
export const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
});

export const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const fetchBooksFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});

export const resetBooks = () => ({
  type: FETCH_BOOKS_RESET,
});

// Async action using Redux Thunk
export const fetchBooks = function () {
  return (dispatch) => {
    const userName = localStorage.getItem("userName");
    dispatch(fetchBooksRequest());

    axios
      .get("https://6347ecf70484786c6e8cea40.mockapi.io/books")
      .then((response) => {
        const userData = response.data.filter(
          (item) => item.persons == userName
        );
        dispatch(fetchBooksSuccess(userData));
      })
      .catch((error) => {
        dispatch(fetchBooksFailure(error.message));
      });
  };
};
