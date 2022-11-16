import Link from 'next/link'
import DateComponent from '~/components/common/date'
import CoverImage from '~/components/common/cover-image'

type Props = Post

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <div>
      <div mb="5">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <h3 text="3xl" mb="3" leading="snug">
        <Link href={`/posts/${slug}`} hover="underline">
          {title}
        </Link>
      </h3>
      <div text="lg" mb="4">
        <DateComponent>{date}</DateComponent>
      </div>
      <p text="lg" leading="relaxed" mb="4">{excerpt}</p>
    </div>
  )
}