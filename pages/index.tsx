import Layout from '~/components/layout'
import Post from '~/components/post/hero'
import PostCards from '~/components/post/cards'
import { getAllPosts } from '~/lib/api'

type Props = {
  posts: Post[] | []
}

export default function Index({ posts }: Props) {
  const heroPost = posts[0]
  const morePosts = posts.slice(1)

  return (
    <>
      <Layout>
        <>
          {heroPost && <Post {...heroPost} />}
          {morePosts && morePosts.length > 0 && (
            <PostCards posts={morePosts} />
          )}
        </>
      </Layout>
    </>
  )
}

export async function getStaticProps(): Promise<{ props: Props }>  {
  try {
    const posts = await getAllPosts() as Post[]
    return {
      props: { posts },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { posts: [] }
    }
  }
}