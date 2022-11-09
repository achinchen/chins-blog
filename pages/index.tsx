import Layout from '../components/layout'
import Post from '../components/post'
import { getAllPosts } from '../lib/api'

export default function Index({ posts }: { posts: []}) {
  const heroPost = posts.slice(0)

  return (
    <>
      <Layout>
        {heroPost && <Post {...heroPost} />}
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  try {
    const posts = await getAllPosts()
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