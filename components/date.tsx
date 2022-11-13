type Props = {
  children: Post['date']
}

export default function DateComponent({ children }: Props) {
  const datetime = new Date(children).toDateString()
  
  return (
    <time dateTime={children}>
      {datetime}
    </time>
  )
}