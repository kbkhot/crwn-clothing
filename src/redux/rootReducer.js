import {combineReducers} from 'redux';
// import combineReducers function
// this rootReducer file is like index.js file for reducers

// import all the reducers needs combining
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';

// after all reducers are combined, export them as key value pairs in an object
//export combine reducers function as default
// keys assigned here in the combineReducer will become properties on state object.
// ie state.keyName will give you the slice of data using mapStateToProps function
// key name should be similar to reducer name which is similar to action creater name. 
export default combineReducers({
    user: userReducer,
    cart: cartReducer
});

