import Link from 'next/link'
import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'

type Props = {
  title: string;
  coverImage: {
    url: string
  };
  date: string;
  excerpt: string;
  author: {
    name: string;
    picture: {
      url: string
    }
  };
  slug: string;
}

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section mt="2">
      <CoverImage title={title} slug={slug} url={coverImage.url} />
      <h3 mb="4" text="4xl" leading="tight">
        <Link href={`/posts/${slug}`} hover="underline">
          {title}
        </Link>
      </h3>
      <Date>{date}</Date>
      <p text="lg" leading="relaxed" mb="4">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </section>
  )
}