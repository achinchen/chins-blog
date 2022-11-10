import Link from 'next/link'
import ContentfulImage from './contentful-image'

type Props = {
  title: string;
  url: string;
  slug?: string;
}

export default function CoverImage({ title, url, slug }: Props) {
  const image = (
    <ContentfulImage
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={url}
    />
  )

  return (
    <div>
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}