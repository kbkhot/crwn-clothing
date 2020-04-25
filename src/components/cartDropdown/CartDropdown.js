import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../customButton/CustomButton';
import './CartDropdown.scss';
import CartItem from '../cartItem/CartItem';
import {selectCartItems} from '../../redux/cart/cartSelectors';

const CartDropdown = ({cartItems})=> {
    
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))}
                {/* cartItem is coming from redux mapStateToProps after using map and going
                to the CartItem component as props.  */}
            </div>
            <CustomButton >GO TO CHECKOUT</CustomButton>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);