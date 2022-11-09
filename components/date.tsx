type Props = {
  children: string
}

export default function DateComponent({ children }: Props) {
  const datetime = new Date(children).toLocaleDateString()
  
  return (
    <time dateTime={children}>
      {datetime}
    </time>
  )
}