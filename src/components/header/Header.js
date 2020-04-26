import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'; // this is for making use of selectors for memoization

import './Header.scss';
import {ReactComponent as Logo} from '../../assets/crwn.svg';
import {auth} from '../../firebase/FirbaseUtils';
import CartIcon from  '../cartIcon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';
import { selectCartHidden} from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelector';



const Header = ({currentUser, hidden})=> {
    return (

        <div className='header'> 
                <Link to= '/' className='log-container'>
                    <Logo className='logo' />
                </Link>
                <div className='options'>
                    <Link to = '/shop' className='option'>
                        SHOP
                    </Link>
                    <Link to = '/shop' className='option'>
                        CONTACT
                    </Link>

                    { currentUser ? (
                            <div className= 'option' onClick={()=> auth.signOut()} > 
                                SIGN OUT
                            </div>
                            ) : (
                            <Link to='/signin' className='option' >SIGN IN </Link>
                        )}
                    <CartIcon />
                </div>

                {  hidden ? null : <CartDropdown /> }
                
               {/* ternary operator for showing or hiding component based on value of hidden */}
               {/* if hidden is true then it shows no component, if hidden is false then it shows the component */}
                
        </div>
    );
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});


// alternate syntax for above mapStateToProps with selectors. 
// const mapStateToProps = state =>({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// })

// mapStateToProps was like this before using selectors
// const mapStateToProps = ({user:{currentUser}, cart: {hidden}}) => ({
//         currentUser,
//         hidden
//     });

// alternate syntax for mapStateToProps function using return  and {}. 
// const mapStateToProps = state => {
//     return {
//         currentUser: state.user.currentUser
//     }
// }

// advanced destructing of state is as follows 

// const mapStateToProps = (state) => ({
//     currentUser: state.user.currentUser,
//     hidden: state.cart.hidden
// });

// is similar to following

// const mapStateToProps =({user:{currentUser}, cart:{hidden}})=> ({
//     currentUser,
//     hidden
// })


export default connect(mapStateToProps) (Header); 