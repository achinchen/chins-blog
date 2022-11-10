import Image from 'next/image'

type Props = {
  id: number;
  assets?: {
    sys: {
      id: number;
    },
    url: string;
    description: string;
  }[]
}

export default function RichTextAsset({ id, assets}: Props) {
  const asset = assets?.find((asset) => asset.sys.id === id)
  if (!asset?.url) return null 
  return <Image src={asset.url} layout="fill" alt={asset.description} />
}