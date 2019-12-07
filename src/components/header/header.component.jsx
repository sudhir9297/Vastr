import React from 'react';
import {Link} from 'react-router-dom';
import './header.style.scss';

import {connect} from 'react-redux';
import {ReactComponent as Logo}  from '../../assets/sbrand.svg';

import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';


const Header=({currentUser,hidden})=>(
<div className='header'>
    <Link className='logo-container' to="/">
            <Logo className='logo'/>
    </Link>  
    <div className="left-options">
        <Link className='option' to='/shop'>
            SHOP
        </Link> 
        <Link className='option' to='/accessories'>
            ACCESSORIES
        </Link> 
        <Link className='option' to='/about'>
            ABOUT
        </Link>
    </div>
    <div className='right-options'>
        {
            currentUser ?
            <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option' to='/signin'>
                SIGN IN
            </Link>
        }
        <CartIcon/>
    </div>
    {hidden?null:<CartDropdown/>}
</div>
);

const mapStatetoProps=createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
});

export default connect(mapStatetoProps)(Header);