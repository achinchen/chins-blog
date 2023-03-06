import type { Content } from '~/components/post/body'
import { getAllPostsWithSlug, getPostAndMorePosts } from '~/lib/api'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '~/components/common/container'
import PostBody from '~/components/post/body'
import PostCards from '~/components/post/cards'
import PostHeader from '~/components/post/header'
import PostTitle from '~/components/post/title'
import Separator from '~/components/common/separator'
import Layout from '~/components/layout'

type Props = {
  post: Post & { content: Content },
  morePosts: Post[] | null,
}

export default function Post({ post, morePosts }: Props) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout description={post.excerpt || post.title} image={post.coverImage}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <meta property="og:image" content={post.coverImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody content={post.content} />
            </article>
            <Separator />
            {morePosts && morePosts.length > 0 && (
              <PostCards posts={morePosts} transform="translate-x-4" />
            )}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }: { params: { slug: string }}) {
  const data = await getPostAndMorePosts(params.slug)

  return {
    props: {
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPostsWithSlug()
  
  return {
    paths: posts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  }
}