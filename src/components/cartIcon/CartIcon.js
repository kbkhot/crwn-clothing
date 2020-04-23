import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shoppingBag.svg';
// this statement imports the shoppingBag.svg icon file from assests directory as 
// ReactComponent named ShoppingIcon
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cartAction';

import './CartIcon.scss';

const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden} >
            <ShoppingIcon className='shopping-icon' />
            <span className= 'item-count'>0</span>
            {/* styling is what puts the item counter in the middle of the shoppingBag.svg
            bottom is pushed up by half px size of icon image */}
        </div>
        
    );
}

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})
 
export default connect (null, mapDispatchToProps)(CartIcon);