import Meta from '~/components/meta'
import Navigation from '~/components/navigation'
import Footer from '~/components/footer'

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Meta />
      <main max-w="screen md:2xl" ma="4 md:auto" min-h="95vh">
        <Navigation />
        {children}
      </main>
      <Footer />
    </>
  )
}