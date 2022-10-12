import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../src/lib/client'
import { PostType } from '../../src/types'

type Data = {
  posts: PostType[]
  total: number
}

export default async function handler(
  req: NextApiRequest & { query: { start: number; end: number } },
  res: NextApiResponse<Data>
) {
  const { start, end } = req.query

  if (isNaN(Number(start)) || isNaN(Number(end))) {
    res.status(400).end()
  }

  const { posts, total } = await loadPosts(start, end)

  res.status(200).json({ posts, total })
}

export async function loadPosts(
  start: number,
  end: number
): Promise<{
  posts: PostType[]
  total: number
}> {
  const query = `{
    "posts": *[_type == "post"] | order(publishedAt desc) [${start}...${end}] {
      _id, title, slug, publishedAt, description
    },
    "total": count(*[_type == "post"])
  }`
  const { posts, total } = await client.fetch(query)

  return { posts, total }
}
