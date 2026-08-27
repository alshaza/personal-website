import { useState } from 'react'
import type { MouseEvent } from 'react'
import ShareIcon from '@mui/icons-material/Share'
import VisibilityIcon from '@mui/icons-material/Visibility'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import { Alert, Box, IconButton, Snackbar, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { Providers } from '../Providers'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'
import { AppContainer, MainContainer } from '../layout.styles'
import { ContactCTA } from '../contact-cta/contact-cta'
import { BlogPostActions, BlogPostBody, BlogPostMeta } from './blog.styles'
import type { Post, PostEngagement } from '../../lib/db'
import { siteUrl } from '../../data/seo-content'

type Reaction = 'fire' | 'water' | null

interface BlogPostPageProps {
  post: Post
  engagement: PostEngagement
}

export function BlogPostPage({ post, engagement }: BlogPostPageProps) {
  const [reaction, setReaction] = useState<Reaction>(engagement.userReaction)
  const [fire, setFire] = useState(engagement.fire)
  const [water, setWater] = useState(engagement.water)
  const [copied, setCopied] = useState(false)

  const postUrl = `${siteUrl}/blog/${post.slug}`

  const handleReactionChange = (_event: MouseEvent<HTMLElement>, next: Reaction) => {
    const previous = reaction
    setFire((count) => count + (next === 'fire' ? 1 : 0) - (previous === 'fire' ? 1 : 0))
    setWater((count) => count + (next === 'water' ? 1 : 0) - (previous === 'water' ? 1 : 0))
    setReaction(next)

    fetch('/api/blog/react', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug: post.slug, reaction: next }),
    }).catch(() => {
      // best-effort; counts resync on next page load
    })
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, text: post.description, url: postUrl })
      } catch {
        // user dismissed the share sheet
      }
      return
    }
    await navigator.clipboard.writeText(postUrl)
    setCopied(true)
  }

  return (
    <Providers>
      <AppContainer>
        <Header currentPath="/blog" />
        <MainContainer role="main">
          <Box component="article" sx={{ mt: 4, mb: 6 }}>
            <Typography variant="h1" gutterBottom>
              {post.title}
            </Typography>

            <BlogPostMeta>
              {post.published_at && (
                <Typography variant="body2" color="text.secondary" component="span">
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
                component="span"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
              >
                <VisibilityIcon fontSize="inherit" />
                {engagement.views} {engagement.views === 1 ? 'view' : 'views'}
              </Typography>
            </BlogPostMeta>

            <BlogPostBody dangerouslySetInnerHTML={{ __html: post.body_html }} />

            <BlogPostActions>
              <ToggleButtonGroup
                value={reaction}
                exclusive
                onChange={handleReactionChange}
                size="small"
                aria-label="React to this post"
              >
                <ToggleButton value="fire" aria-label="Loved it">
                  <LocalFireDepartmentIcon fontSize="small" sx={{ mr: 0.75 }} />
                  {fire}
                </ToggleButton>
                <ToggleButton value="water" aria-label="Not for me">
                  <WaterDropIcon fontSize="small" sx={{ mr: 0.75 }} />
                  {water}
                </ToggleButton>
              </ToggleButtonGroup>

              <IconButton onClick={handleShare} aria-label="Share this post">
                <ShareIcon />
              </IconButton>
            </BlogPostActions>
          </Box>

          <ContactCTA />
        </MainContainer>
        <Footer />
      </AppContainer>

      <Snackbar
        open={copied}
        autoHideDuration={2500}
        onClose={() => setCopied(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" onClose={() => setCopied(false)}>
          Link copied to clipboard
        </Alert>
      </Snackbar>
    </Providers>
  )
}
