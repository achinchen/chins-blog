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
    href: '/projects',
    name: 'Project'
  }
]


export default function Navigation() {
  return (
    <nav my="2">
      <ul flex="~">
        {LINKS.map(({ href, name }) => (
          <li flex="inline" mr="2" key={name}>
            <Link href={href}>
              <a pa="2">{name}</a>
            </Link>
          </li>
        ))}
      </ul>        
    </nav>
  )
}


