import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants/authConstants"
import { setError, clearError } from "../actions/errorActions"
import { setUserToLocalStorage } from "../utils/authUtils"
import api from "../api";

export const login = (credentials) => {
  return dispatch => {
    dispatch(loginRequest())

    api.post('api/v1/users/login', credentials)
    .then((response) => {
      const { data } = response;
      if (data.status !== 'success') {
        dispatch(loginFail());
        dispatch(setError("login", data.message));
      } else {
        setUserToLocalStorage(data.data);
        dispatch(clearError("login"));
        dispatch(loginSuccess(data.data));
      }
    })
    .catch((error) => {
      dispatch(loginFail());
      dispatch(setError("login", error));
    });
  };
}

export const loginRequest = () => ({ type: LOGIN_REQUEST });

export const loginSuccess = user => ({ type: LOGIN_SUCCESS, payload: { user } });

export const loginFail = () => ({ type: LOGIN_FAIL });
