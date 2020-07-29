import axios from 'axios';
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  LOG_OUT,
  LOGIN_INIT,
} from './type';

//import { setAlert } from './alert';
import setAuthToken from '../../utils/index';

// Set heades with token
export const loadUser = () => async (dispatch) => {
  if (localStorage.authToken) {
    setAuthToken(localStorage.authToken);
  }

  try {
    const res = await axios.get('/user/auth/load');
    console.log('load user', res);
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (error) {
    console.log('error', error);
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
  console.log('action', body);
  try {
    const res = await axios.post('/user/auth/login', body, config);
    console.log('response', res.data);
    dispatch({ type: LOGIN_SUCCES, payload: res.data });
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      //  errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//Log the user out
export const logout = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
};
