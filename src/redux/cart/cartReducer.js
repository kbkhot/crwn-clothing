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
import {addItemToCart} from './cartUtils';
// this is named export from cartUtils file. Basically, its a helper function created in seperate file

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}
const cartReducer =(state=INITIAL_STATE, action)=> {
 switch (action.type) {
     case cartActionTypes.TOGGLE_CART_HIDDEN:
        return {
            ...state,
            hidden: !state.hidden
        }
     case cartActionTypes.ADD_ITEMS:
        return{
            ...state,
            cartItems: addItemToCart (state.cartItems, action.payload)
            // using the helper function created in the cartUtils.js file here on how the cartItem on state will look like
        }
 
     default: 
        return state
         
 }
}

export default cartReducer;