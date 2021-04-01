/* eslint-disable no-alert */
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
        console.log('Response data', response);
        dispatch(loginDispatcher(response.data));
      } else if (response.status === 400) {
        console.log('hiii');
        alert('Wrong Password');
      }
    })
    .catch((err) => {
      if (err.response.data) {
        alert('Wrong Email Or Password');
      } else if (err.response.data.errors.body === 'Unauth User') {
        alert('Wrong Email Or Password');
        console.log(err.response.data.errors);
        dispatch(unauthDispatcher(err.response.data));
      } else {
        dispatch(unauthDispatcher('Server error'));
      }
    });
};

const createUser = (payload) => async (dispatch) => {
  console.log(payload);
  try {
    const response = await axios.post('http://localhost:3002/profile/signup', payload);
    console.log('Status Code : ', response);
    if (response.status === 200) {
      console.log(response);
      dispatch(createUserDispatcher(response.data));
    } else if (response.status === 202) {
      alert(response.data.error);
    }
  } catch (err) {
    console.log(err);
    dispatch(unauthDispatcher('Server error'));
  }
};

export {
  loginDispatcher, unauthDispatcher, loginUser, createUser, logoutDispatcher, createUserDispatcher,
};
