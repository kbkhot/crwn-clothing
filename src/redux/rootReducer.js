import {combineReducers} from 'redux';
// import combineReducers function
// this rootReducer file is like index.js file for reducers

// import all the reducers needs combining
import userReducer from '../redux/user/userReducer';

// after all reducers are combined, export them as key value pairs in an object
//export combine reducers function as default
export default combineReducers({
    user: userReducer
});

