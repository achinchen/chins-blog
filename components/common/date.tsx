type Props = {
  children: Post['date']
}

const getDateString = (target: string) => {
  const date = new Date(target)
  const year = date.getFullYear()
  const month = date.toLocaleString('default', { month: 'long' })
  return `${month} ${year}`
}

export default function DateComponent({ children }: Props) {
  
  return (
    <time dateTime={children}>
      {getDateString(children)}
    </time>
  )
}