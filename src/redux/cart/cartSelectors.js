import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector (
    [selectCart], 
    cart => cart.cartItems
);

// we should ideally name this selectHiddne but this is how instructor names it
export const selectCartHidden = createSelector (
    [selectCart],
    (cart)=> cart.hidden
);

export const selectCartItemsCount= createSelector (
    [selectCartItems], 
    (cartItems)=>cartItems.reduce(
        (accumulatedItemCount, cartItem)=>accumulatedItemCount+cartItem.quantity, 0
    )
    // this can be written as follows as well. The namesused argument in the function can be anything. 
        // itemCount: cartItems.reduce((a, e) => a + e.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce(
        (acc, el)=> acc + el.quantity*el.price, 0
    )
);

// selectCart is input selector. It takes state as whole as parameter and gives a slice called state.cart. 
// So its names slectCart. 
//  variable to be exported to be used in mapStateToProps is called export selector
// in export selector one selects another slice and exports it out to be used
// after export const the name is chosen to so that it represents the slice selected.
// it is set equal to createSelector which takes two parameters. First is an array which takes the value of 
// input selector. Usually a layer deeper. Second parameters is a function. It takes parameter value of which is 
// result of the selector passed in the array. One can add multiple selectors in the array
// If multiple selectors are added to the array, one has to add mutiple parameters in respective sequence
// the function then returns another slice of the pie