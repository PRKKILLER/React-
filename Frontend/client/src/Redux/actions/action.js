/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable import/named */
import axios from 'axios';
import Types from '../constants/actionType';

const loginDispatcher = (payload) => ({
  type: Types.login, payload,
});

const unauthDispatcher = (payload) => ({
  type: Types.unauthenticated, payload,
});

const logoutDispatcher = (payload) => ({
  type: Types.logout, payload,
});

const createUserDispatcher = (payload) => ({
  type: Types.signup, payload,
});

const loginUser = (payload) => (dispatch) => {
  axios.post('http://localhost:3002/profile/login', payload)
    .then((response) => {
      console.log('Status Code : ', response);
      if (response.status === 200) {
        console.log(response);
        dispatch(loginDispatcher(response.data));
      }
    })
    .catch((err) => {
      if (err.response.data) {
        console.log(err.response.data);
        dispatch(unauthDispatcher(err.response.data));
      } else {
        dispatch(unauthDispatcher('Server error'));
      }
    });
};

const createUser = (payload) => (dispatch) => {
  console.log(payload);
  axios.post('http://localhost:3002/profile/signup', payload)
    .then((response) => {
      console.log('Status Code : ', response);
      if (response.status === 200) {
        console.log(response);
        dispatch(createUserDispatcher(response.data));
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch(unauthDispatcher('Server error'));
    });
};

export {
  loginDispatcher, unauthDispatcher, loginUser, createUser, logoutDispatcher, createUserDispatcher,
};
