import Link from 'next/link'
import Date from '~/components/common/date'
import CoverImage from '~/components/common/cover'

type Props = Post;

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <section mt="2">
      <CoverImage title={title} slug={slug} url={coverImage.url} />
      <h3 mb="4" text="4xl" leading="tight" font="semibold">
        <Link href={`/posts/${slug}`}>
          <a bg="none">{title}</a>
        </Link>
      </h3>
      <Date>{date}</Date>
      <p text="lg" leading="relaxed" mb="4">{excerpt}</p>
    </section>
  )
}