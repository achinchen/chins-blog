type Props = {
  children: JSX.Element
}

export default function Container({ children }: Props) {
  return <div container="~" mx="auto" px="5">{children}</div>
}