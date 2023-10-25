import type { RemarkProps } from 'react-remark';
import type { Props as PostImageProps } from './image'
import { Remark } from 'react-remark';
import PostImage from './image'

export default function PostBody({ content }: { content: string }) { 

  return (
    <div max-w="2xl" mx="auto">
      <Remark
        rehypeReactOptions={{
          components: {
            img: (props: any) => <PostImage {...(props as unknown as PostImageProps)} />
          },
        }}>
        {content}
      </Remark>
    </div>
  )
}