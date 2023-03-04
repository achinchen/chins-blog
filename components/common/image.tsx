import type { ImageLoaderProps, ImageProps } from 'next/image'
import NextImage from 'next/image'

const contentfulLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const CONTENTFUL_IMAGE_ASSETS_DOMAIN = 'images.ctfassets.net'

export type Props = ImageProps

export default function image(props: Props): JSX.Element {
  const isContentfulAssets = (props.src as string).includes(CONTENTFUL_IMAGE_ASSETS_DOMAIN)
  
  if (isContentfulAssets) return <NextImage {...props} alt={props.alt}  />
  
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} src={props.src as string} alt={props.alt} />

}
