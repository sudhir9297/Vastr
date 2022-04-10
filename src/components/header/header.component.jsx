import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { FaRegUser } from "react-icons/fa";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

import "./header.style.scss";
import ContentWrapper from "../content-wrapper/content-wrapper.component";

const Header = ({ currentUser, hidden, toggleMenuHidden }) => {
  return (
    <div className="header_container">
      {" "}
      <ContentWrapper>
        <div className="header_inner_container">
          <div className="left_option_container">
            <Link className="logo" to="/Vastr">
              Vastr.
            </Link>
            <Link to="/shop" className="options">
              Shop
            </Link>
            <Link to="/accessories" className="options">
              Lookbook
            </Link>
            <Link to="/contact" className="options">
              Contact
            </Link>
          </div>

          <div className="right_option_container">
            {currentUser ? (
              <div onClick={() => auth.signOut()} className="options">
                Sign Out
              </div>
            ) : (
              <Link to="/signin" className="options">
                <FaRegUser size="20px" />
              </Link>
            )}
            <div className="cart_container">
              <CartIcon />
            </div>
          </div>

          {hidden ? null : <CartDropdown />}
        </div>{" "}
      </ContentWrapper>
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStatetoProps)(Header);
