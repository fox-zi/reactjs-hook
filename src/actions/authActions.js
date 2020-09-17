import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants/authConstants"
import { setError, clearError } from "../actions/errorActions"
import { setUserToLocalStorage } from "../utils/authUtils"
import api from "../api";

export async function login(credentials, dispatch) {
  dispatch(loginRequest())

  try {
    const { data: { user } } = await api.post('api/v1/users/login', credentials)

    setUserToLocalStorage(user)
    dispatch(clearError("login"))
    dispatch(loginSuccess(user))
  } catch (error) {
    dispatch(loginFail())

    if (error.response) {
      dispatch(setError("login", error.response.data.errors))
    }
  }
}

export const loginRequest = () => ({ type: LOGIN_REQUEST });

export const loginSuccess = user => ({ type: LOGIN_SUCCESS, payload: { user } });

export const loginFail = () => ({ type: LOGIN_FAIL });
