import { Remark } from 'react-remark';
import PostImage from './image'

export default function PostBody({ content }: { content: string }) { 

  return (
    <div max-w="2xl" mx="auto">
      <Remark
        rehypeReactOptions={{
          components: {
            img: PostImage
          },
        }}>
        {content}
      </Remark>
    </div>
  )
}