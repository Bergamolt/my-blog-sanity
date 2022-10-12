import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import classes from './index.module.scss'

type Props = {
  children: React.ReactNode
  classNames?: string | undefined
}

const Article = ({ classNames, children }: Props) => {
  return (
    <article className={cx(classNames, classes.article)}>
      <Link href='/'>
        <a className={classes.articleBack}>
          <AiOutlineArrowLeft />
        </a>
      </Link>
      <div>{children}</div>
    </article>
  )
}

export default Article
