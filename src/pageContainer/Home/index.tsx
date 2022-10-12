import { useState } from 'react'
import {
  Cover,
  Section,
  SocialNetworks,
  BuyMeCoffee,
  PostGrid,
  Post,
  Button,
} from '../../components'
import Title from '../../components/Title'
import { PostType } from '../../types'
import classes from './index.module.scss'

const NEXT_POST_STEP = 4

type Props = {
  initialPosts: PostType[]
}

const Home = ({ initialPosts }: Props) => {
  const [posts, setPosts] = useState<PostType[]>(initialPosts)
  const [currentStep, setCurrentStep] = useState(NEXT_POST_STEP)
  const [loading, setLoading] = useState(false)
  const isVisibilityButton = currentStep < posts.length

  const loadMorePosts = async () => {
    setLoading(true)

    try {
      const data = await fetch(
        `/api/posts?start=${currentStep}&end=${currentStep + NEXT_POST_STEP}`
      ).then((res) => res.json())

      setPosts([...posts, ...data.posts])
      setCurrentStep(currentStep + NEXT_POST_STEP)
    } catch (error) {
      console.log('loadMorePosts____', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Section>
        <Cover>
          Valeriy <br /> Khoma
        </Cover>
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>

      <Section>
        <Title type='medium'>New posts</Title>

        <PostGrid>
          {posts?.map((post: PostType) => (
            <Post
              key={post.slug.current}
              title={post.title}
              slug={post.slug.current}
              description={post.description}
            />
          ))}
        </PostGrid>

        {isVisibilityButton && (
          <div className={classes.loadMoreButton}>
            <Button
              onClick={loadMorePosts}
              disabled={isVisibilityButton && !loading}
            >
              Load more
            </Button>
          </div>
        )}
      </Section>
    </div>
  )
}

export default Home
