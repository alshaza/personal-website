import { useMemo, useState } from 'react'
import ShareIcon from '@mui/icons-material/Share'
import VisibilityIcon from '@mui/icons-material/Visibility'
import ScheduleIcon from '@mui/icons-material/Schedule'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined'
import { Alert, Box, Chip, IconButton, Snackbar, Typography } from '@mui/material'
import { keyframes } from '@mui/material/styles'
import { Providers } from '../Providers'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'
import { AppContainer, MainContainer } from '../layout.styles'
import { BlogPostActions, BlogPostBody, BlogPostMeta } from './blog.styles'
import type { Post, PostEngagement } from '../../lib/db'
import { siteUrl } from '../../data/seo-content'

type Reaction = 'fire' | null

const WORDS_PER_MINUTE = 200

const firePop = keyframes({
  '0%': { transform: 'scale(1)' },
  '30%': { transform: 'scale(1.3)' },
  '60%': { transform: 'scale(0.95)' },
  '100%': { transform: 'scale(1)' },
})

interface BlogPostPageProps {
  post: Post
  categorySlug: string
  engagement: PostEngagement
}

export function BlogPostPage({ post, categorySlug, engagement }: BlogPostPageProps) {
  const [reaction, setReaction] = useState<Reaction>(engagement.userReaction === 'fire' ? 'fire' : null)
  const [fire, setFire] = useState(engagement.fire)
  const [copied, setCopied] = useState(false)
  const [justReacted, setJustReacted] = useState(false)

  const postUrl = `${siteUrl}/blog/${categorySlug}/${post.slug}`

  const readingMinutes = useMemo(() => {
    const wordCount = post.body_html.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(Boolean).length
    return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE))
  }, [post.body_html])

  const handleReactionToggle = () => {
    const previous = reaction
    const next: Reaction = previous === 'fire' ? null : 'fire'
    setFire((count) => count + (next === 'fire' ? 1 : 0) - (previous === 'fire' ? 1 : 0))
    setReaction(next)
    if (next === 'fire') setJustReacted(true)

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
        await navigator.share({ url: postUrl, title: post.title })
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
          <Box component="article" sx={{ mt: 4, mb: 6, maxWidth: 720, mx: 'auto' }}>
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
                <ScheduleIcon fontSize="inherit" />
                {readingMinutes} min read
              </Typography>
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
              <Chip
                icon={reaction === 'fire' ? <LocalFireDepartmentIcon /> : <LocalFireDepartmentOutlinedIcon />}
                label={fire}
                color="error"
                variant={reaction === 'fire' ? 'filled' : 'outlined'}
                onClick={handleReactionToggle}
                onAnimationEnd={() => setJustReacted(false)}
                sx={justReacted ? { animation: `${firePop} 0.4s ease` } : undefined}
                aria-label="React with fire"
              />

              <IconButton onClick={handleShare} aria-label="Share this post">
                <ShareIcon />
              </IconButton>
            </BlogPostActions>
          </Box>
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
