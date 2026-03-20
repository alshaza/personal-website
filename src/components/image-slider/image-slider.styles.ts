import { Box, IconButton, styled } from '@mui/material'

export const SliderContainer = styled(Box)(({ theme }) => ({
  padding: '48px 16px',
  overflow: 'hidden',
  [theme.breakpoints.up('sm')]: {
    padding: '64px 32px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '80px 64px',
  },
}))

export const SliderViewport = styled(Box)({
  position: 'relative',
  maxWidth: 900,
  margin: '0 auto',
  overflow: 'hidden',
  borderRadius: 16,
})

export const SliderTrack = styled(Box)({
  display: 'flex',
  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  '& img': {
    width: '100%',
    flexShrink: 0,
    aspectRatio: '16/9',
    objectFit: 'cover',
  },
})

export const SliderArrow = styled(IconButton)(({ theme }) => ({
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

export const SliderDots = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: 8,
  marginTop: 16,
})

export const Dot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>(({ theme, active }) => ({
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[300],
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
}))
