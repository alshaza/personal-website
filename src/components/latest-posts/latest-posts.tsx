import { Typography } from '@mui/material'
import { useMemo } from 'react'
import { linkedinPosts } from '../../data/content'
import { PostCard, PostsContainer, PostsGrid } from './latest-posts.styles'

export function LatestPosts() {
  const posts = useMemo(() => linkedinPosts, [])
  const firstPost = posts[0]

  const getEagerEmbedHtml = (embedHtml: string) => {
    // Force eager iframe loading so all slides are fetched immediately.
    return embedHtml.includes('loading=')
      ? embedHtml.replace(/loading=(['"]).*?\1/i, 'loading="eager"')
      : embedHtml.replace('<iframe', '<iframe loading="eager"')
  }

  return (
    <PostsContainer as="section">
      <Typography variant="h2" textAlign="center" sx={{ mb: { xs: 4, md: 6 } }}>
        Latest Posts
      </Typography>
      <PostsGrid aria-live="polite">
        {firstPost ? (
          <PostCard dangerouslySetInnerHTML={{ __html: getEagerEmbedHtml(firstPost.embedHtml) }} />
        ) : null}
      </PostsGrid>
    </PostsContainer>
  )
}
