import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer';
import bucketReducer from './bucketReducer';

const rootReducer = combineReducers({
  userReducer,
  bucketReducer
})

export default createStore(rootReducer);