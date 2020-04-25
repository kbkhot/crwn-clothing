import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector (
    [selectCart], 
    cart => cart.cartItems
);

export const selectCartItemsCount= createSelector (
    [selectCartItems], 
    (cartItems)=>cartItems.reduce(
        (accumulatedItemCount, cartItem)=>accumulatedItemCount+cartItem.quantity, 0
    )
    // this can be written as follows as well. The namesused argument in the function can be anything. 
        // itemCount: cartItems.reduce((a, e) => a + e.quantity, 0)
)