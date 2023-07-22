import {
  SIGN_USERS_REQUEST,
  SIGN_USERS_SUCCESS,
  SIGN_USERS_FAILURE,
} from "./signUpUsersAction";
const initialState = {
  list: [],
  loading: false,
  error: null,
};

const signUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SIGN_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case SIGN_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default signUserReducer;
