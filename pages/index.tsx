import Layout from '../components/layout'
import Post from '../components/hero-post'
import { getAllPosts } from '../lib/api'

export default function Index({ posts }) {
  const heroPost = posts[0]

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