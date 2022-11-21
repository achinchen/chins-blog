type Props = {
  children: Post['date']
}

const getDateString = (target: string) => {
  const date = new Date(target)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = String(date.getDay()).padStart(2, 0)
  return `${year} / ${month} / ${day}`
}

export default function DateComponent({ children }: Props) {
  
  return (
    <time dateTime={children}>
      {getDateString(children)}
    </time>
  )
}