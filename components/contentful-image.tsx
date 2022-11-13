import type { ImageLoaderProps } from 'next/image'
import Image from 'next/image'

const contentfulLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export default function ContentfulImage(props: any) {
  return <Image loader={contentfulLoader} alt={props.alt} {...props} />
}
