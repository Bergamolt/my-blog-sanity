import React from 'react'
import cx from 'classnames'
import classes from './index.module.scss'
import { capitalize } from '../../utils/capitalize'

type Props = {
  className?: string
  type: 'left' | 'right'
  children: React.ReactNode
}

const ScreenEgg = ({ className, children, type }: Props) => {
  return (
    <div
      className={cx(
        className,
        classes.screenEgg,
        classes[`screenEgg${capitalize(type)}`]
      )}
    >
      {children}
    </div>
  )
}

export default ScreenEgg
