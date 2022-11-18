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
    <div mt="12">
      <h3 text="3xl" mb="3" leading="snug">
        <Link href={`/posts/${slug}`} hover="underline">
          {title}
        </Link>
      </h3>
      <p text="lg" leading="relaxed" mb="4">{excerpt}</p>
    </div>
  )
}