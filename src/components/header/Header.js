import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './Header.scss';
import {ReactComponent as Logo} from '../../assets/crwn.svg';
import {auth} from '../../firebase/FirbaseUtils';


const Header = ({currentUser})=> {
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

                    {
                        currentUser ? (
                        <div className= 'option' onClick={()=> auth.signOut()} > 
                        SIGN OUT
                        </div>
                        ) : (
                        
                            <Link to='/signin' className='option'>SIGN IN</Link>
                        
                        )
                    }
                </div>
        </div>
    );
}

const mapStateToProps = state => ({
        currentUser: state.user.currentUser
    })

// alternate syntax for mapStateToProps function using return  and {}. 
// const mapStateToProps = state => {
//     return {
//         currentUser: state.user.currentUser
//     }
// }

export default connect(mapStateToProps) (Header); 