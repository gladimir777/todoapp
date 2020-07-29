import axios from 'axios';
import {
  TASK_INIT,
  TASK_SUCCESS,
  TASK_FAIL,
  TASK_UPDATE_INIT,
  TASK_UPDATE_SUCCESS,
  TASK_UPDATE_FAIL,
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

export const updateTask = (id, state) => async (dispatch) => {
  if (localStorage.authToken) {
    setAuthToken(localStorage.authToken);
  }
  const config = {
    Headers: {
      'Content-type': 'application/json',
    },
  };
  dispatch({ type: TASK_UPDATE_INIT });

  try {
    const res = await axios.put(`/task/update/${id}/${state}`, config);
    dispatch({ type: TASK_UPDATE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: TASK_UPDATE_FAIL,
    });
  }
};
