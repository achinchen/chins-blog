type Props = {
  label: string;
  children: string;
}

export default function Emoji({ label, children }: Props) {
  return <span role="img" aria-label={label}>
    {children}
  </span>
}