import { Box, Button, Typography, styled } from '@mui/material'

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

export const SliderCTASlide = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: 20,

}))

export const SliderCTAButton = styled(Button)({
  marginTop: 8,
  fontSize: '1rem',
  paddingLeft: 32,
  paddingRight: 32,
  paddingTop: 12,
  paddingBottom: 12,
})

export const SliderDots = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: 8,
  marginTop: 24,
})

export const SliderDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  width: 10,
  height: 10,
  borderRadius: '50%',
  cursor: 'pointer',
  backgroundColor: active ? theme.palette.primary.main : theme.palette.action.disabled,
  transition: 'background-color 0.2s ease',
}))
