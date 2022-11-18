import PostPreview from '~/components/post/post-preview'

type Props = {
  posts: Post[];
}

export default function MorePosts({ posts }: Props) {
  return (
    <section mt="12">
      <div flex="~ col" mb="32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}