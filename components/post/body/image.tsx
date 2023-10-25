import type { Props as ImageProps } from '~/components/common/image'
import Image from '~/components/common/image'

export type Props = {
  src?: string 
} & ImageProps;

export default function PostImage(props: Props) {
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
