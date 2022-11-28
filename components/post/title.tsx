type Props = {
  children: Post['title']
}

export default function PostTitle({ children }: Props) {
  return (
    <h1 text="3xl md:left" font="semibold" tracking="tighter" leading="tight md:none" mb="4 sm:12">
      {children}
    </h1>
  )
}