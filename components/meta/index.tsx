import Head from 'next/head'
import { useRouter } from 'next/router'
import { TITLE, DESCRIPTION, THEME_COLOR, HOME_OG_IMAGE_URL } from './constants'

export type Props = {
  description?: string
}

export default function Meta({ description = DESCRIPTION }: Props) {
  const router = useRouter()

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link rel="icon" href="/favicon/favicon.ico" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <title>{TITLE}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content={THEME_COLOR} />
      <meta property="og:title" content={TITLE} key="title" />
      <meta property="og:site_name" content={TITLE} />
      <meta property="og:description" content={description} key="description" />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <meta property="og:url" content={router.asPath} />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
    </Head>
  )
}