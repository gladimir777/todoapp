import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  } else {
    delete axios.headers.common['Bearer '];
  }
};

export default setAuthToken;
