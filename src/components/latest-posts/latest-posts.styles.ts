import { Box, Typography, styled } from '@mui/material'

export const PostsContainer = styled(Box)({
  marginTop: 'var(--section-spacing)',
})

export const PostsSectionHeading = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: 32,
  [theme.breakpoints.up('md')]: {
    marginBottom: 48,
  },
}))

export const PostsEmblaViewport = styled(Box)({
  overflow: 'hidden',
  borderRadius: 16,
  maxWidth: 750,
  margin: '0 auto',
})

export const PostsEmblaTrack = styled(Box)({
  display: 'flex',
})

export const PostCard = styled(Box)(({ theme }) => ({
  flex: '0 0 100%',
  minWidth: 0,
  overflow: 'hidden',
  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
  backgroundColor: theme.palette.background.paper,
  borderRadius: 16,
  '& iframe': {
    display: 'block',
    border: 'none',
    width: '100%',
  },
}))
