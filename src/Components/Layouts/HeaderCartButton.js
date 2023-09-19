import React from 'react'
import classes from './headerCart.module.css'
import CartIcon from '../Cart/CartIcon'
const HeaderCartButton = (props) => {
  return <button className={classes.button}>
    <span className={classes.icon}>
        <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span>3</span>
  </button>
  
}

export default HeaderCartButton