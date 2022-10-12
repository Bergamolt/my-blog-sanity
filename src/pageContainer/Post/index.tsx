import React from 'react'
import { format } from 'date-fns'
// @ts-ignore
import BlockContent from '@sanity/block-content-to-react'
import { Article, Content, Title } from '../../components'
import { clientConfig } from '../../lib/client'
import classes from './index.module.scss'

type Props = {
  title: string
  _createdAt: string
  body: any[]
}

const Post = (props: Props) => {
  const publisedDate = format(new Date(props._createdAt), 'dd MMMM yyyy')

  return (
    <Article>
      <Title type='medium'>{props.title}</Title>
      <p className={classes.publishedDate}>{publisedDate}</p>
      <Content>
        <BlockContent
          blocks={props.body}
          imageOptions={{ w: 320, h: 240, fit: 'max' }}
          projectId={clientConfig.projectId}
          dataset={clientConfig.dataset}
        />
      </Content>
    </Article>
  )
}

export default Post
