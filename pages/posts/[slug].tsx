import type { Content } from '~/components/post-body'
import { getAuthor, getAllPostsWithSlug, getPostAndMorePosts } from '~/lib/api'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '~/components/container'
import PostBody from '~/components/post-body'
import MoreStories from '~/components/more-stories'
import PostHeader from '~/components/post-header'
import Separator from '~/components/separator'
import Layout from '~/components/layout'
import PostTitle from '~/components/post-title'

type Props = {
  post: Post & { content: Content },
  morePosts: Post[] | null,
  author: Author
}

export default function Post({ post, morePosts, author }: Props) {
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
                author={author}
              />
              <PostBody content={post.content} />
            </article>
            <Separator />
            {morePosts && morePosts.length > 0 && (
              <MoreStories posts={morePosts} />
            )}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }: { params: { slug: string }}) {
  const [data, author] = await Promise.all([
    getPostAndMorePosts(params.slug),
    getAuthor()
  ])

  return {
    props: {
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
      author
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