import type { Props as MetaProps } from '~/components/meta'
import Meta from '~/components/meta'
import Navigation from '~/components/navigation'

type Props = {
  children: JSX.Element;
} & MetaProps;

export default function Layout({ children, description }: Props) {
  return (
    <>
      <Meta description={description} />
      <main max-w="screen md:2xl" ma="4 md:auto" min-h="95vh">
        <Navigation />
        {children}
      </main>
    </>
  )
}