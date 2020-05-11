import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

// This is code from before when we used observere-listener pattern to login instead of sagas

// import { UserActionTypes } from "./user.types";

// const INITIAL_STATE = {
//   currentUser: null,
// };

// const userReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case UserActionTypes.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default userReducer;

// note: userActionTypes.SET_CURRENT_USER is same as calling it "SET_CURRENT_USER"
// to prevent typos, we are using kay value pair. One can use a variable too.
// in the userActionTypes file all the value are set. This step can be completely ommited to make is simple
// One can just set case "SET_CURRENT_USER": return {...state, currentUser: action.paylod}
