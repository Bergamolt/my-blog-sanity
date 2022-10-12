import React from 'react'
import classes from './index.module.scss'

type Props = {
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  className?: string
}

const Button = ({ children, disabled, onClick }: Props) => {
  return (
    <button onClick={onClick} className={classes.button} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
