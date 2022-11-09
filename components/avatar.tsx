import ContentfulImage from './contentful-image'

type Props = {
  name: string;
  picture: {
    url: string
  }
}

export default function Avatar({ name, picture }: Props) {
  return (
    <div flex="~ items-center">
      <div relative w="12" h="12" mr="4">
        <ContentfulImage
          src={picture.url}
          layout="fill"
          rounded="full"
          alt={name}
        />
      </div>
      <div text="xl" font="bold">{name}</div>
    </div>
  )
}