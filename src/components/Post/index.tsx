import Link from 'next/link'
import React from 'react'
import { PostType } from '../../types'
import Title from '../Title'
import classes from './index.module.scss'

type Props = {
  title: string
  slug: string
  description: string
}

const Post = ({ title, slug, description }: Props) => {
  return (
    <Link href={`/post/${encodeURIComponent(slug)}`} className={classes.post}>
      <div>
        <a className={classes.postLink}>
          <Title type='small' className={classes.postTitle}>
            {title}
          </Title>
        </a>
        <div className={classes.postContent}>
          <p>img</p>
          <p className={classes.postDescription}>{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default Post
