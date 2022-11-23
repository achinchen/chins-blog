import Layout from '~/components/layout'
import PostCards from '~/components/post/cards'
import Me from '~/components/me'
import { getAllPosts } from '~/lib/api'

type Props = {
  posts: Post[] | []
}

export default function Index({ posts }: Props) {
  const morePosts = posts

  return (
    <>
      <Layout>
        <>
          <Me />
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