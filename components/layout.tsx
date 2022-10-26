import Meta from '~/components/meta'
import Footer from '~/components/footer'

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Meta />
      <main max-w="2xl md:screen" min-h="screen">{children}</main>
      <Footer />
    </>
  )
}