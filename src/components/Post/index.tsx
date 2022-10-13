import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../lib/client'
import Title from '../Title'
import classes from './index.module.scss'

type Props = {
  title: string
  slug: string
  description: string
  image: any
}

const Post = ({ title, slug, description, image }: Props) => {
  const imageUrl = image && urlFor(image).width(200).url()

  return (
    <Link href={`/post/${encodeURIComponent(slug)}`} className={classes.post}>
      <div>
        <a className={classes.postLink}>
          <Title type='small' className={classes.postTitle}>
            {title}
          </Title>
        </a>
        <div className={classes.postContent}>
          <div>
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={image?.caption}
                width='200'
                height='100'
              />
            )}
          </div>
          <p className={classes.postDescription}>{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default Post
