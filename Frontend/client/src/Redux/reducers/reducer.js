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
      localStorage.setItem('Email', action.payload.user.EmailId);
      return {
        authenticated: true, // after update user formsubmition reset

      };
    }
    case Types.signup: {
      console.log('InsideSignup', action.payload.user);
      localStorage.setItem('Email', action.payload);
      return {
        authenticated: true, // after update user formsubmition reset
      };
    }
    case Types.unauthenticated: {
      console.log(action.payload);
      return {
        authenticated: false,
      };
    }
    case Types.logout: {
      console.log('login', action.payload.user);
      localStorage.removeItem('Email');
      return {
        authenticated: false, // after update user formsubmition reset
      };
    }
    default:
      return state;
  }
};

export default reducer;
