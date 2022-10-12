import React from 'react'
import { client } from '../../src/lib/client'
import Post from '../../src/pageContainer/Post'
import { PostType } from '../../src/types'

type Props = {
  post: PostType
}

const PostPage = (props: Props) => {
  const { post } = props

  return (
    <Post title={post.title} body={post.body} _createdAt={post._createdAt} />
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "post"] { 
      slug {
        current
      }
   }`
  const posts = await client.fetch(query)

  const paths = posts.map((post: { slug: { current: string } }) => ({
    params: { slug: post.slug.current },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

type StaticProps = {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params: { slug } }: StaticProps) => {
  const query = `*[_type  == "post" && slug.current == "${slug}"]`
  const post = await client.fetch(query)

  return {
    props: {
      post: post[0],
    },
  }
}

export default PostPage
