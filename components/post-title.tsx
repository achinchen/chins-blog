type Props = {
  children: Post['title']
}

export default function PostTitle({ children }: Props) {
  return (
    <h1 text="6xl md:7xl lg:8xl font-bold center md:left" tracking="tighter" leading="tight md:none" mb="12">
      {children}
    </h1>
  )
}