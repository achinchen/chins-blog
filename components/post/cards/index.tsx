import Link from 'next/link'
import style from './index.module.css'

type Props = {
  posts: Post[];
}

export default function PostCards({ posts }: Props) {
  return (
    <section mt="20" mb="28">
      <div flex="~" gap="20">
        {posts.map(({slug, title, date, excerpt}) => (
          <Link href={`/posts/${slug}`} key={slug}>
            <a group="" flex="1/2" overflow="hidden" p="5" m="-5" bg="none hover:none">
              <h3
                display="inline-block"
                position="relative"
                m="0"
                text="xl"
                leading="snug"
                font="semibold"
                after="
                  content-empty
                  display-block
                  position-absolute
                  h-3.5
                  w-[calc(100%+30px)]
                  bg-link
                  ml--4
                  transform-translate-y--3
                  transform-origin-left
                  transition-duration-150
                  transition-ease-out
                  z--1
                  "
                group-hover-after="
                  w-[calc(100%+48px)]
                  transform-scale-x-800
                  transform-scale-y-1200
                  transform-translate-y-0
                  ">
                {title}
              </h3>
              <p m="t-4 0" text="lg" leading="relaxed">{excerpt}</p>
            </a>
          </Link>
        ))}
      </div>
    </section>
  )
}