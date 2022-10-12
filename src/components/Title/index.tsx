import React from 'react'
import cx from 'classnames'
import classes from './index.module.scss'
import { capitalize } from '../../utils/capitalize'

type Props = {
  className?: string
  type: 'small' | 'medium'
  children: React.ReactNode
}

const Title = ({ type, className, children }: Props) => {
  const TagName = type === 'small' ? 'h3' : 'h2'

  return (
    <TagName
      className={cx(
        className,
        classes.title,
        classes[`title${capitalize(type)}`]
      )}
    >
      {children}
    </TagName>
  )
}

export default Title
