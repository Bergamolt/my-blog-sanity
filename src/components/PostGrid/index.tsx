import React from 'react'
import classes from './index.module.scss'

type Props = {
  children: React.ReactNode
}

const PostGrid = ({ children }: Props) => {
  return <div className={classes.postGrid}>{children}</div>
}

export default PostGrid
