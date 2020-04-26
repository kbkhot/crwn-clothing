import React from 'react';
import {connect} from 'react-redux';

import './CheckoutItem.scss';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cartAction';


const CheckoutItem =({cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity} = cartItem;

    // by destructuring cartItem here we will have access to carttItem 
    // if one destructures in the parameters bracket for CheckoutItem, we will not have access to CartItem
    return (
        <div className= 'checkout-item'>
            <div className= 'image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'> 
                <div className= 'arrow' onClick={()=> removeItem(cartItem)} > 
                    &#10094;
                </div>
                <span className='value' > {quantity} </span>
                <div className= 'arrow' onClick={()=> addItem(cartItem)} >
                    &#10095;
                </div>
            </span>
            <span className='price'> {price} </span>
            <div className='remove-button' onClick={()=>clearItem(cartItem)}>
                &#10005;
            </div>
        </div>
    );
}
// &#10005 is UTF8 Dingbat for X symbol
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item=> dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);