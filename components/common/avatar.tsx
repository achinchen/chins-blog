import ContentfulImage from '~/components/contentful-image'

type Props = Author

export default function Avatar({ name, picture }: Props) {
  return (
    <div position="relative" w="12" h="12" mr="4">
      <ContentfulImage
        src={picture.url}
        layout="fill"
        rounded="full"
        alt={name}
      />
    </div>
  )
}