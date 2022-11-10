type Props = {
  children: string
}

export default function DateComponent({ children }: Props) {
  const datetime = new Date(children).toDateString()
  
  return (
    <time dateTime={children}>
      {datetime}
    </time>
  )
}