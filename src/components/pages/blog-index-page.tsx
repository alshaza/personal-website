import { Box, Chip, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { Providers } from '../Providers'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'
import { AppContainer, MainContainer } from '../layout.styles'
import { BlogPostList, BlogPostCard, categoryColor } from './blog.styles'
import type { PostSummary } from '../../lib/db'

export function BlogIndexPage({ posts }: { posts: PostSummary[] }) {
  return (
    <Providers>
      <AppContainer>
        <Header currentPath="/blog" />
        <MainContainer role="main">
          <Box component="section" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h1" gutterBottom>
              Blog
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
              Articles on engineering career growth, communication, and leadership visibility.
            </Typography>
          </Box>

          {posts.length === 0 ? (
            <Typography variant="h2" sx={{ fontSize: '1.5rem', color: 'text.secondary' }}>
              Coming soon
            </Typography>
          ) : (
            <BlogPostList>
              {posts.map((post) => (
                <li key={post.slug}>
                  <BlogPostCard href={`/blog/${post.category_slug}/${post.slug}`}>
                    <Typography variant="h2" sx={{ fontSize: '1.5rem', mb: 1 }}>
                      {post.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {post.description}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1.5, flexWrap: 'wrap' }}>
                      <Chip
                        label={`#${post.category_name.replace(/\s+/g, '')}`}
                        size="small"
                        sx={{
                          bgcolor: categoryColor(post.category_slug).bg,
                          color: categoryColor(post.category_slug).text,
                          fontWeight: 600,
                        }}
                      />
                      {post.published_at && (
                        <Typography variant="body2" color="text.secondary">
                          {new Date(post.published_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </Typography>
                      )}
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
                      >
                        <VisibilityIcon fontSize="inherit" />
                        {post.views} {post.views === 1 ? 'view' : 'views'}
                      </Typography>
                    </Box>
                  </BlogPostCard>
                </li>
              ))}
            </BlogPostList>
          )}
        </MainContainer>
        <Footer />
      </AppContainer>
    </Providers>
  )
}
