import React from "react";
import styled from "styled-components";
import { BsBag } from "react-icons/bs";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

import "./cart-icon.style.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart__container" onClick={toggleCartHidden}>
    <div className="cart__text">Bag</div>

    <div className="cart__icon_container">
      <BsBag size="22px" />
      <div className="cart__count">{itemCount}</div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
