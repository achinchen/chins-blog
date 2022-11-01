import Layout from '../components/layout'
import { getPosts } from '../lib/api'

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
  await getPosts()
  return {
    props: { allPosts: [] },
  }
}