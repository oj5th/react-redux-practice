import { combineReducers } from 'redux';
import usersReducer from './users';

export const allReducers = combineReducers({
  users: usersReducer
})

export default allReducers;
