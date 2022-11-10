import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div display="hidden md:block" mb="md:12">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div mb="8 md:16" mx="sm:0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <div max-w="2xl" mx="auto">
        <div display="block md:hidden" mb="6">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div mb="6" text="lg">
          <DateComponent>{date}</DateComponent>
        </div>
      </div>
    </>
  )
}