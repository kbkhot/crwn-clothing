import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shoppingBag.svg';
// this statement imports the shoppingBag.svg icon file from assests directory as 
// ReactComponent named ShoppingIcon
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cartAction';
import {createStructuredSelector} from 'reselect';

import './CartIcon.scss';
import {selectCartItemsCount} from '../../redux/cart/cartSelectors';

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden} >
            <ShoppingIcon className='shopping-icon' />
        <span className= 'item-count'>{itemCount}</span>
            {/* styling is what puts the item counter in the middle of the shoppingBag.svg
            bottom is pushed up by half px size of icon image */}
            {/* itemCount is coming from mapStateToProps and using reduce function on cartItems array */}
        </div>
    );
}

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})
 
const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
});

// alernate syntax for selector in mapStateToProps
// const mapStateToProps = (state) => ({
//     cartItems: selectCartItems(state)
// });
export default connect (mapStateToProps, mapDispatchToProps)(CartIcon);