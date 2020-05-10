import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

// import {userActionTypes} from './userTypes';

// // alternate syntax for action creater is as follows. It does not sure return key word

// export const setCurrentUser = user => ({
//         type: userActionTypes.SET_CURRENT_USER,
//         payload:user
// });

// // export const setCurrentUser = user => {
// //     return {
// //         type: 'SET_CURRENT_USER',
// //         payload: user
// //     }
// // }

// In Above example one is using userActionTypes.SET_CURRENT_USER. This is just to prevent typos
// Its using keys from object userActionTypes set in file userTypes.js. It acts like a variable.
// in the alternate syntax, I have not used this variable and type is hard coded.
// Without this, Normally there are no imports required for action created. And its names export.
