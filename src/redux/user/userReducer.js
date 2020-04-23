import {userActionTypes} from './userTypes';

const INITIAL_STATE = {
    currentUser : null
}

const userReducer = (state= INITIAL_STATE, action)=> {
    switch(action.type){
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default: return state
    }
}

export default userReducer;

// note: userActionTypes.SET_CURRENT_USER is same as calling it "SET_CURRENT_USER"
// to prevent typos, we are using kay value pair. One can use a variable too. 
// in the userActionTypes file all the value are set. This step can be completely ommited to make is simple
// One can just set case "SET_CURRENT_USER": return {...state, currentUser: action.paylod}