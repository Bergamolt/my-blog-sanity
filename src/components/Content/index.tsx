import React from 'react'
import classes from './index.module.scss'

type Props = {
  children: React.ReactNode
}

const Content = ({ children }: Props) => {
  return <div className={classes.content}>{children}</div>
}

export default Content
