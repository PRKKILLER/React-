/* eslint-disable no-console */
/* eslint-disable import/named */
import Types from '../constants/actionType';

const initialState = {
  authenticated: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.login: {
      console.log('login', action.payload.user);
      localStorage.setItem('Looged in', '1');
      return {
        authenticated: true, // after update user formsubmition reset
      };
    }
    case Types.signup: {
      console.log('InsideSignup', action.payload);
      localStorage.setItem('Looged in', '1');
      return {
        authenticated: true, // after update user formsubmition reset
      };
    }
    case Types.unauthenticated: {
      console.log(action.payload);
      localStorage.setItem('Looged in', '1');
      return {
        authenticated: false,
      };
    }
    case Types.logout: {
      console.log('login', action.payload.user);
      localStorage.removeItem('Login');
      return {
        authenticated: false, // after update user formsubmition reset
      };
    }
    default:
      return state;
  }
};

export default reducer;
