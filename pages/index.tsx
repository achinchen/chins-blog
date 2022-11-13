import Layout from '~/components/layout'
import Post from '~/components/hero-post'
import { getAllPosts } from '~/lib/api'

type Props = {
  posts: Post[] | []
}

export default function Index({ posts }: Props) {
  const heroPost = posts[0]

  return (
    <>
      <Layout>
        {heroPost && <Post {...heroPost} />}
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