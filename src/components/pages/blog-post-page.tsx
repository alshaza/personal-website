import { Box, Typography } from '@mui/material'
import { Providers } from '../Providers'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'
import { AppContainer, MainContainer } from '../layout.styles'
import { ContactCTA } from '../contact-cta/contact-cta'
import { BlogPostBody } from './blog.styles'
import type { Post } from '../../lib/db'

export function BlogPostPage({ post }: { post: Post }) {
  return (
    <Providers>
      <AppContainer>
        <Header currentPath="/blog" />
        <MainContainer role="main">
          <Box component="article" sx={{ mt: 4, mb: 6 }}>
            <Typography variant="h1" gutterBottom>
              {post.title}
            </Typography>
            {post.published_at && (
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {new Date(post.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </Typography>
            )}
            <BlogPostBody
              dangerouslySetInnerHTML={{ __html: post.body_html }}
            />
          </Box>

          <ContactCTA />
        </MainContainer>
        <Footer />
      </AppContainer>
    </Providers>
  )
}
