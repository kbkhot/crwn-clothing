
import cartActionTypes from './cartTypes';
import {addItemToCart, removeItemFromCart} from './cartUtils';


// this is named export from cartUtils file. Basically, its a helper function created in seperate file
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


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer =(state = INITIAL_STATE, action) => {
 switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartActionTypes.ADD_ITEMS:
            return {
                ...state,
                cartItems: addItemToCart (state.cartItems, action.payload)
                // using the helper function created in the cartUtils.js file here on how the cartItem on state will look like
            };
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter (
                    (cartItem) => cartItem.id !== action.payload.id
                )
            };
            // filter is array method. It gives a new array. It asseses condition statement on each element. 
            // It keep keeps the element in the new array if value of condition statement comes true 
            // That means, keep the element in new array if the element meets the condition set
        case cartActionTypes.REMOVE_ITEM :
            return {

                ...state,
                cartItems: removeItemFromCart (state.cartItems, action.payload)
            }

        default: 
        return state;
         
    }
}

export default cartReducer;