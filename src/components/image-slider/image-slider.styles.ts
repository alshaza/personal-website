import { Box, Typography, styled } from '@mui/material'

export const SliderContainer = styled(Box)({
  marginTop: 'var(--section-spacing)',
})

export const SliderSectionHeading = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: 32,
  [theme.breakpoints.up('md')]: {
    marginBottom: 48,
  },
}))

export const SliderEmblaViewport = styled(Box)({
  overflow: 'hidden',
})

export const SliderEmblaTrack = styled(Box)({
  display: 'flex',
})

export const SliderSlide = styled(Box)({
  flex: '0 0 100%',
  minWidth: 0,
})

export const SliderCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
  },
}))

export const SliderCardContent = styled(Box)(({ theme }) => ({
  order: 1,
  [theme.breakpoints.up('md')]: {
    order: 0,
    flex: '0 0 40%',
  },
}))

export const SliderCardImage = styled(Box)(({ theme }) => ({
  order: 0,
  borderRadius: 16,
  overflow: 'hidden',
  '& img': {
    width: '100%',
    aspectRatio: '16/10',
    objectFit: 'cover',
    display: 'block',
  },
  [theme.breakpoints.up('md')]: {
    order: 1,
    flex: '1 1 60%',
  },
}))

export const SliderCardTitle = styled(Typography)({
  marginBottom: 8,
})

export const SliderCardDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}))

export const SliderCTASlide = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: 20,
  width: '100%',
})

export const SliderPreviews = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: 24,
  marginTop: 32,
})

export const SliderPreviewItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  width: 64,
  height: 64,
  padding: 8,
  borderRadius: 12,
  cursor: 'pointer',
  border: `2px solid ${active ? theme.palette.primary.main : 'transparent'}`,
  boxShadow: active ? 'var(--shadow-blue)' : 'none',
  opacity: active ? 1 : 0.4,
  transition: 'opacity 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    opacity: 1,
  },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}))
