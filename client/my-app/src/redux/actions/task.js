import axios from 'axios';
import {
  //USER_LOADED,
  //AUTH_ERROR,
  TASK_INIT,
  TASK_SUCCESS,
  TASK_FAIL,
} from './type';

import setAuthToken from '../../utils/index';

// Set heades with token
/*export const loadUser = () => async (dispatch) => {
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
};*/

//Login user
export const addTask = (task) => async (dispatch) => {
  if (localStorage.authToken) {
    setAuthToken(localStorage.authToken);
  }
  const config = {
    Headers: {
      'Content-type': 'application/json',
    },
  };

  dispatch({ type: TASK_INIT });

  const body = task;
  console.log('task action', body);
  try {
    const res = await axios.post('/user/task/create', body, config);
    console.log('response task', res.data);
    dispatch({ type: TASK_SUCCESS, payload: res.data });
    // dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: TASK_FAIL,
    });
  }
};
