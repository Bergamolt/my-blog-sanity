import React from 'react'
import cx from 'classnames'
import classes from './index.module.scss'

type Props = {
  children: React.ReactNode
  classNames?: string | undefined
}

const Section = ({ children, classNames }: Props) => {
  return <section className={cx(classNames, classes.section)}>{children}</section>
}

export default Section
