import React, { Fragment } from 'react'
import classes from './header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HederImage from '../../assets/header.jpg'
import HeaderCartButton from './HeaderCartButton'
const Header = (props) => {
  return (
    <Fragment>
    <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
    </header>
    <div className={classes['main-image']}>
        <img src = {HederImage}/>
    </div>
    </Fragment>
  )
}

export default Header