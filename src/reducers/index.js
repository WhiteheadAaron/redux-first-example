import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    counterReducer,
    userReducer
});

// This is how you could combine all of your reducers

export default rootReducer;