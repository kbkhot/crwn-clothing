import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import CustomButton from '../customButton/CustomButton';
import './CartDropdown.scss';
import CartItem from '../cartItem/CartItem';
import {selectCartItems} from '../../redux/cart/cartSelectors';
import { toggleCartHidden} from '../../redux/cart/cartAction';

const CartDropdown = ({cartItems, history, dispatch})=> {
    
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                { cartItems.length ? ( 
                    cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                    ))
                ): (
                    <span className ='empty-message' > Your cart is empty </span>
                )  
            }
                {/* cartItem is coming from redux mapStateToProps after using map and going
                to the CartItem component as props.  */}
            </div>
            <CustomButton onClick= {()=>{
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});
// aternate syntax for using selectCartItems without createStructuredSelector
// const mapStateToProps = (state) => ({
//     cartItems: selectCartItems(state)
// });

export default withRouter(connect(mapStateToProps)(CartDropdown));