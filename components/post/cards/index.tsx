import type { AttributifyAttributes } from '@unocss/preset-attributify';
import Link from 'next/link'
import DateComponent from '~/components/common/date'

type Props = {
  posts: Post[];
} & AttributifyAttributes;

export default function PostCards({ posts, ...attrs }: Props) {
  return (
    <section mt="20" mb="28" mx="4" {...attrs}>
      <div flex="~ col md:row wrap" gap="y-12 md:12" mx="md:-4">
        {posts.map(({slug, title, excerpt, date}) => (
          <Link href={`/posts/${slug}`} key={slug}>
            <a group="" flex="basis-1/2" overflow="hidden" p="4" m="-4" bg="none hover:none">
              <h3
                display="inline-block"
                position="relative"
                m="0"
                text="2xl"
                leading="tight"
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
              <p m="t-3 0" text="base" line-clamp="2" max-h="12" min-h="12" overflow="hidden" leading="relaxed">
                {excerpt ?? <DateComponent>{date}</DateComponent>}              </p>
            </a>
          </Link>
        ))}
      </div>
    </section>
  )
}