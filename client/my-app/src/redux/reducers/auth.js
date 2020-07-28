import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  LOG_OUT,
} from '../actions/type';

const initialState = {
  token: localStorage.getItem('authToken'),
  loading: true,
  user: null,
  isAuthenticated: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        loading: false,
        ...payload,
        isAuthenticated: true,
      };

    case LOGIN_SUCCES:
      localStorage.setItem('authToken', payload.token);
      return {
        ...state,
        ...payload,
        loading: false,
        isAuthenticated: true,
      };

    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOG_OUT:
      localStorage.removeItem('authToken');
      return {
        ...state,
        loading: false,
        token: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
}
