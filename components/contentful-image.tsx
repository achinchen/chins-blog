import Image from 'next/image'

type Parameters = {
  src: string;
  width: string;
  quality?: string;
}

const contentfulLoader = ({ src, width, quality }: Parameters) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export default function ContentfulImage(props: any) {
  return <Image loader={contentfulLoader} {...props} alt={props.alt} />
}
