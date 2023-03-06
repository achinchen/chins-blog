import type { Props as MetaProps } from '~/components/meta'
import Meta from '~/components/meta'
import Navigation from '~/components/navigation'

type Props = {
  children: JSX.Element;
} & MetaProps;

export default function Layout({ children, ...metaProps }: Props) {
  return (
    <>
      <Meta {...metaProps} />
      <main max-w="screen md:2xl" ma="4 md:auto" min-h="95vh">
        <Navigation />
        {children}
      </main>
    </>
  )
}