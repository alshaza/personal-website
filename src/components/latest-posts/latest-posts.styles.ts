import { Box, IconButton, styled } from '@mui/material'

export const PostsContainer = styled(Box)(({ theme }) => ({
  padding: '48px 16px',
  [theme.breakpoints.up('sm')]: {
    padding: '64px 32px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '80px 64px',
  },
}))

export const PostsGrid = styled(Box)({
  position: 'relative',
  maxWidth: 750,
  margin: '0 auto',
  width: '100%',
  overflow: 'hidden',
  borderRadius: 16,
})

export const PostsTrack = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
}))

export const PostCard = styled(Box)(({ theme }) => ({
  flex: '0 0 100%',
  overflow: 'hidden',
  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
  backgroundColor: theme.palette.background.paper,
  width: '100%',
  '& iframe': {
    display: 'block',
    border: 'none',
    width: '100%',
  },
}))

export const PostsSliderArrow = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255,255,255,0.85)',
  backdropFilter: 'blur(4px)',
  zIndex: 2,
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.95)',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))

export const PostsDots = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: 8,
  marginTop: 16,
})

export const PostsDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>(({ theme, active }) => ({
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[300],
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
}))
