import axios from 'axios';
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  LOG_OUT,
} from './type';

//import { setAlert } from './alert';
import setAuthToken from '../../utils/index';

// Set heades with token
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');
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

  const body = userData;
  console.log('action', body);
  try {
    const res = await axios.post('/user/auth/login', body, config);
    console.log('response', res.data);
    dispatch({ type: LOGIN_SUCCES, payload: res.data });
    // dispatch(loadUser());
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
