import Image from '~/components/common/image'

type Props = Author

export default function Avatar({ name, picture }: Props) {
  return (
    <div position="relative" w="12" h="12" mr="4">
      <Image
        src={picture.url}
        layout="fill"
        rounded="full"
        alt={name}
      />
    </div>
  )
}