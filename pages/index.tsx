import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'

export default function Index({ allPosts }: { allPosts: []}) {

  return (
    <>
      <Layout>
        <div>TEST</div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  try {
    const a = await getAllPostsForHome()
  } catch (e) {
    console.error(e)
  }
  return {
    props: { allPosts: [] },
  }
}