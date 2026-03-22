import { Box, Typography, styled } from '@mui/material'

export const SliderContainer = styled(Box)({
  marginTop: 'var(--section-spacing)',
  overflow: 'hidden',
})

export const SliderSectionHeading = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: 32,
  [theme.breakpoints.up('md')]: {
    marginBottom: 48,
  },
}))

export const SliderLayout = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    gap: 32,
    alignItems: 'stretch',
  },
}))

export const SliderLeft = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  [theme.breakpoints.up('md')]: {
    flex: '1 1 60%',
  },
}))

export const SliderEmblaViewport = styled(Box)({
  overflow: 'hidden',
  borderRadius: 16,
})

export const SliderEmblaTrack = styled(Box)({
  display: 'flex',
})

export const SliderRight = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
    flex: '0 0 35%',
    borderRadius: 16,
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
  },
}))

export const SliderSlide = styled(Box)({
  flex: '0 0 100%',
  minWidth: 0,
  '& img': {
    width: '100%',
    aspectRatio: '16/9',
    objectFit: 'cover',
    display: 'block',
    borderRadius: 16,
  },
})
