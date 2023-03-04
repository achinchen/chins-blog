import type { Props as ImageProps } from '~/components/common/image'
import Image from '~/components/common/image'

export default function PostImage(props: ImageProps & { src: string }): JSX.Element {
  return (
    <Image 
      {...props}
      src={props.src}
      layout="fill"
      m="auto"
      max-w="100"
      flex="~"
      alt={props.alt} />
  )
}
