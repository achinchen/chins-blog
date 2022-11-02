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
  const a = await getAllPostsForHome()
  console.log(a)
  return {
    props: { allPosts: [] },
  }
}