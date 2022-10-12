import type { NextPage } from 'next'

import Home from '../src/pageContainer/Home'
import { PostType } from '../src/types'
import { loadPosts } from './api/posts'

const NEXT_POST_STEP = 4

const HomePage: NextPage<{ initialPosts: [PostType]; total: number }> = ({
  initialPosts,
}) => {
  return <Home initialPosts={initialPosts} />
}

export const getServerSideProps = async () => {
  const { posts, total } = await loadData()

  return {
    props: {
      initialPosts: posts,
      total,
    },
  }
}

async function loadData(): Promise<{ posts: PostType[]; total: number }> {
  const { posts, total } = await loadPosts(0, NEXT_POST_STEP)

  return { posts, total }
}

export default HomePage
