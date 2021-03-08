import { combineReducers } from 'redux';
import reducer from './reducer';

const rootReducer = combineReducers({
  auth: reducer,
});

export default rootReducer;
