import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  LOG_OUT,
  LOGIN_INIT,
  TASK_INIT,
  TASK_SUCCESS,
  TASK_FAIL,
} from '../actions/type';

const initialState = {
  token: localStorage.getItem('authToken'),
  loading: false,
  taskLoading: false,
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
        user: payload,
        isAuthenticated: true,
      };

    case LOGIN_INIT:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCES:
      localStorage.setItem('authToken', payload.access_token);
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

    case TASK_INIT:
      return {
        ...state,
        taskLoading: true,
      };

    case TASK_SUCCESS:
      return {
        ...state,
        taskLoading: false,
      };

    case TASK_FAIL:
      return {
        ...state,
        taskLoading: false,
      };
    default:
      return state;
  }
}
