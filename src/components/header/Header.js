import React from 'react';
import {Link} from 'react-router-dom';

import './Header.scss';
import {ReactComponent as Logo} from '../../assets/crwn.svg';


const Header = ()=> {
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
                </div>

        </div>
    );
}

export default Header; 