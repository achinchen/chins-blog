import PostPreview from '~/components/post-preview'

type Props = {
  posts: Post[];
}

export default function MoreStories({ posts }: Props) {
  return (
    <section>
      <h2 mb="8" text="6xl md:7xl" font="bold" tracking="tighter" leading="tight">
        More Stories
      </h2>
      <div grid="~ grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32" mb="32">
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