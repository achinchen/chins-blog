import { useRemark } from 'react-remark';

export default function PostBody({ content }: { content: string }) { 
  const [reactContent, setMarkdownSource] = useRemark();
  setMarkdownSource(content)
 
  return (
    <div max-w="2xl" mx="auto">
      <div>
        {reactContent}
      </div>
    </div>
  )
}