import axios from 'axios';
import {
  //USER_LOADED,
  //AUTH_ERROR,
  TASK_INIT,
  TASK_SUCCESS,
  TASK_FAIL,
} from './type';

import setAuthToken from '../../utils/index';

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

  try {
    const res = await axios.post('/task/create', body, config);

    dispatch({ type: TASK_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: TASK_FAIL,
    });
  }
};
