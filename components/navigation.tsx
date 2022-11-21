import Link from 'next/link'


const LINKS = [
  {
    href: '/',
    name: 'Home'
  },
  {
    href: '/me',
    name: 'About'
  },
  {
    href: 'https://github.com/achinchen',
    name: 'Github'
  }
]


export default function Navigation() {
  return (
    <nav>
      <ul flex="~" justify="end" mt="4" mb="12 sm:24">
        {LINKS.map(({ href, name }) => (
          <li flex="inline" mr="4" key={name}>
            <Link pa="2" href={href}>
              <a text="5" font="light">{name}</a>
            </Link>
          </li>
        ))}
      </ul>        
    </nav>
  )
}


