import { Typography } from '@mui/material'
import { linkedinPosts } from '../../data/content'
import { PostsContainer, PostsGrid, PostCard } from './latest-posts.styles'

export function LatestPosts() {
  return (
    <PostsContainer as="section">
      <Typography variant="h2" textAlign="center" sx={{ mb: { xs: 4, md: 6 } }}>
        Latest Posts
      </Typography>
      <PostsGrid>
        {linkedinPosts.map((post, index) => (
          <PostCard
            key={index}
            dangerouslySetInnerHTML={{ __html: post.embedHtml }}
          />
        ))}
      </PostsGrid>
    </PostsContainer>
  )
}
