// This is basic syntax without all the additonal variables 

// const cartReducer = (state={hidden: true}, action)=> {
//     switch (action.type) {
//         case "TOGGLE_CART_HIDDEN":
//             return{
//                 ...state,
//                 hidden: !state.hidden
//             }
//         default:
//             return state
//     }
// }

// export default cartReducer;


import cartActionTypes from './cartTypes';
const INITIAL_STATE = {
    hidden: true
}
const cartReducer =(state=INITIAL_STATE, action)=> {
 switch (action.type) {
     case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
 
     default: 
        return state
         
 }
}

export default cartReducer;