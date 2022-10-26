import Layout from '../components/layout'
import Head from 'next/head'

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
  return {
    props: { allPosts: [] },
  }
}