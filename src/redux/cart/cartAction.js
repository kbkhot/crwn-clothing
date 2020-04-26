import cartActionTypes from './cartTypes'; 
 
 export const toggleCartHidden =()=> {
     return {
         type:  cartActionTypes.TOGGLE_CART_HIDDEN
     }
 }

 // alternate syntax is as follows. In above we have used a variable for type to prvent typos. 
  
//  export const toggleCartHidden = ()=> {
//      return {
//          type: "TOGGLE_CART_HIDDEN"
//      }
//  }

export const addItem =(item)=> ({
    type: cartActionTypes.ADD_ITEMS,
    payload: item
});
// removes item from the checkout page usng X sign
export const clearItemFromCart = item => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
});

// remove item using the arrow at checkout page
export const removeItem =(item) => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
});