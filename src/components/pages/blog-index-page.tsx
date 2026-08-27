import { Box, Typography } from '@mui/material'
import { Providers } from '../Providers'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'
import { AppContainer, MainContainer } from '../layout.styles'
import { ContactCTA } from '../contact-cta/contact-cta'
import { BlogPostList, BlogPostCard } from './blog.styles'
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
                  <BlogPostCard href={`/blog/${post.slug}`}>
                    <Typography variant="h2" sx={{ fontSize: '1.5rem', mb: 1 }}>
                      {post.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {post.description}
                    </Typography>
                    {post.published_at && (
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
                        {new Date(post.published_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </Typography>
                    )}
                  </BlogPostCard>
                </li>
              ))}
            </BlogPostList>
          )}

          <Box sx={{ mt: 6 }}>
            <ContactCTA />
          </Box>
        </MainContainer>
        <Footer />
      </AppContainer>
    </Providers>
  )
}
