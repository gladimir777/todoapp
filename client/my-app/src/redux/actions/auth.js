import axios from 'axios';
import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_INIT,
  RESGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  LOG_OUT,
  LOGIN_INIT,
} from './type';

import setAuthToken from '../../utils/index';

// Set heades with token
export const loadUser = () => async (dispatch) => {
  if (localStorage.authToken) {
    setAuthToken(localStorage.authToken);
  }

  try {
    const res = await axios.get('/user/auth/load');
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (error) {
    dispatch({ type: AUTH_ERROR });
  }
};

//Login user
export const login = (userData) => async (dispatch) => {
  const config = {
    Headers: {
      'Content-type': 'application/json',
    },
  };

  dispatch({ type: LOGIN_INIT });

  const body = userData;
  try {
    const res = await axios.post('/user/auth/login', body, config);
    dispatch({ type: LOGIN_SUCCES, payload: res.data });
    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//Login user
export const register = (userData) => async (dispatch) => {
  const config = {
    Headers: {
      'Content-type': 'application/json',
    },
  };

  dispatch({ type: REGISTER_INIT });

  const body = userData;
  try {
    const res = await axios.post('/user/create', body, config);
    dispatch({ type: RESGISTER_SUCCESS, payload: res.data });
    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//Log the user out
export const logout = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
};
