import type { Content } from '~/components/post/post-body'
import { getAllPostsWithSlug, getPostAndMorePosts } from '~/lib/api'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '~/components/common/container'
import PostBody from '~/components/post/post-body'
import MorePosts from '~/components/post/more-posts'
import PostHeader from '~/components/post/post-header'
import PostTitle from '~/components/post/post-title'
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
    <Layout>
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
              <MorePosts posts={morePosts} />
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