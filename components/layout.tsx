import Meta from '~/components/meta'
import Footer from '~/components/footer'

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}