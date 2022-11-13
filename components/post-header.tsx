import Avatar from '~/components/avatar'
import DateComponent from '~/components/date'
import CoverImage from '~/components/cover-image'
import PostTitle from '~/components/post-title'

type Props = {
  author: Author
} & Pick<Post, 'title' | 'coverImage' | 'date'>

export default function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div flex="~" align="items-center" mb="md:12">
        {author && <>
          <Avatar name={author.name} picture={author.picture} />
          <h3 m="0" font="normal">{author.name}</h3>
        </>}
      </div>
      <div mb="8 md:16" mx="sm:0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <DateComponent>{date}</DateComponent>
    </>
  )
}