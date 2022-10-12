import React from 'react'
import cx from 'classnames'
import classes from './index.module.scss'

type Props = {
  children: React.ReactNode
  className?: string
}

const Cover = ({ children, className }: Props) => {
  return (
    <div className={cx(className, classes.cover)}>
      <h1 className={classes.title}>{children}</h1>
    </div>
  )
}

export default Cover
