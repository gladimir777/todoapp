import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  LOG_OUT,
  LOGIN_INIT,
  REGISTER_INIT,
  RESGISTER_SUCCESS,
  REGISTER_FAIL,
  TASK_INIT,
  TASK_SUCCESS,
  TASK_FAIL,
  TASK_UPDATE_FAIL,
  TASK_UPDATE_SUCCESS,
  TASK_UPDATE_INIT,
} from '../actions/type';

const initialState = {
  token: localStorage.getItem('authToken'),
  loading: false,
  taskLoading: false,
  taskUpdateLoading: false,
  loadingRister: false,
  task: [],
  user: null,
  isAuthenticated: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      const loadedTask = [...payload.taks];
      return {
        ...state,
        loading: false,
        task: loadedTask,
        user: payload,
        isAuthenticated: true,
      };

    case LOGIN_INIT:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_INIT:
      return {
        ...state,
        loadingRister: true,
      };

    case RESGISTER_SUCCESS:
    case LOGIN_SUCCES:
      localStorage.setItem('authToken', payload.access_token);
      return {
        ...state,
        ...payload,
        loading: false,
        loadingRister: false,
        isAuthenticated: true,
      };

    case REGISTER_FAIL:
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
        task: [...state.task, payload.task],
        taskLoading: false,
      };

    case TASK_FAIL:
      return {
        ...state,
        taskLoading: false,
      };

    case TASK_UPDATE_INIT:
      return {
        ...state,
        taskUpdateLoading: true,
      };

    case TASK_UPDATE_SUCCESS:
      const index = state.task.findIndex((obj) => obj._id === payload.task._id);

      const newTask = [
        ...state.task.slice(0, index),
        payload.task,
        ...state.task.slice(index + 1),
      ];

      return {
        ...state,
        task: [...newTask],
      };
    case TASK_UPDATE_FAIL:
      return {
        ...state,
        taskUpdateLoading: false,
      };

    default:
      return state;
  }
}
