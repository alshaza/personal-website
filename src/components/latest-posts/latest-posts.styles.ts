import { Box, styled } from '@mui/material'

export const PostsContainer = styled(Box)(({ theme }) => ({
  padding: '48px 16px',
  [theme.breakpoints.up('sm')]: {
    padding: '64px 32px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '80px 64px',
  },
}))

export const PostsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 24,
  maxWidth: 1100,
  margin: '0 auto',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}))

export const PostCard = styled(Box)(({ theme }) => ({
  borderRadius: 16,
  overflow: 'hidden',
  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
  backgroundColor: theme.palette.background.paper,
  '& iframe': {
    display: 'block',
    border: 'none',
  },
}))
