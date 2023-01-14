import DateComponent from '~/components/common/date'
import CoverImage from '~/components/common/cover'
import PostTitle from '~/components/post/title'

type Props = Pick<Post, 'title' | 'coverImage' | 'date'>

export default function PostHeader({ title, coverImage, date }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div mb="8 md:16" mx="sm:0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <DateComponent>{date}</DateComponent>
    </>
  )
}