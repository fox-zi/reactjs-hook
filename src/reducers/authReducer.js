import { getUserFromLocalStorage } from '../utils/authUtils';
import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, SET_ERROR } from "../constants/authConstants";

const user = getUserFromLocalStorage();
console.log(user, !!user)
const initialState = {
  user: user,
  authenticated: !!user,
  loading: false, user
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    default:
      return state;

    case LOGIN_REQUEST:
      return { ...state, loading: true }

    case LOGIN_FAIL:
      return { ...state, loading: false }

    case LOGIN_SUCCESS: {
      const { user } = payload

      return { ...state, loading: false, user, authenticated: true }
    }
  }
}
