import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { linkedinPosts } from '../../data/content'
import { useLazyInit } from '../../hooks/use-lazy-init'
import {
  PostsContainer,
  PostsSectionHeading,
  PostsEmblaViewport,
  PostsEmblaTrack,
  PostCard,
} from './latest-posts.styles'

export function LatestPosts() {
  const { ref: lazyRef, isNearViewport } = useLazyInit()
  const [emblaRef] = useEmblaCarousel(
    { loop: true, active: isNearViewport },
    isNearViewport ? [Autoplay({ delay: 4000, stopOnMouseEnter: true, stopOnInteraction: false })] : [],
  )

  const getEagerEmbedHtml = (embedHtml: string) => {
    return embedHtml.includes('loading=')
      ? embedHtml.replace(/loading=(['"]).*?\1/i, 'loading="eager"')
      : embedHtml.replace('<iframe', '<iframe loading="eager"')
  }

  return (
    <PostsContainer as="section" ref={lazyRef}>
      <PostsSectionHeading variant="h2">
        Latest Posts
      </PostsSectionHeading>
      <PostsEmblaViewport ref={emblaRef}>
        <PostsEmblaTrack>
          {linkedinPosts.map((post, index) => (
            <PostCard
              key={index}
              dangerouslySetInnerHTML={{ __html: getEagerEmbedHtml(post.embedHtml) }}
            />
          ))}
        </PostsEmblaTrack>
      </PostsEmblaViewport>
    </PostsContainer>
  )
}
