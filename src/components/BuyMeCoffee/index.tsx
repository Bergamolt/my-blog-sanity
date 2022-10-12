import React from 'react'
import ScreenEgg from '../ScreenEgg'
import classes from './index.module.scss'

const BuyMeCoffee = () => {
  return (
    <ScreenEgg type='right'>
      <div className={classes.buyCoffee}>
        <a className={classes.buyCoffeeButton} href='#' target='_blank'>
          Buy me coffee
        </a>
      </div>
    </ScreenEgg>
  )
}

export default BuyMeCoffee
