import axios from "axios";

//Action Types
export const SIGN_USERS_REQUEST = "SIGN_USERS_REQUEST";
export const SIGN_USERS_SUCCESS = "SIGN_USERS_SUCCESS";
export const SIGN_USERS_FAILURE = "SIGN_USERS_FAILURE";

//Action creators
export const signUserRequest = () => ({
  type: SIGN_USERS_REQUEST,
});
export const signUserSuccess = () => ({
  type: SIGN_USERS_SUCCESS,
});
export const signUserFailure = () => ({
  type: SIGN_USERS_Failure,
});

//Async Post using Redux Thunk
export const fetchPostUsers = function ({ username, password }) {
  return (dispatch) => {
    dispatch(signUserRequest());
    axios
      .post("https://6347ecf70484786c6e8cea40.mockapi.io/users", {
        name: username,
        username: username,
        password: password,
      })
      .then((response) => {
        const users = response.data;
        dispatch(signUserSuccess(users));
      })
      .catch((error) => {
        dispatch(signUserFailure(error.message));
      });
  };
};
