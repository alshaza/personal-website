import { Box, Typography, styled } from '@mui/material'

export const HelpContainer = styled(Box)({
  marginTop: 'var(--section-spacing)',
})

export const HelpSectionHeading = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: 32,
  fontSize: '2rem',
  lineHeight: 1.25,
  fontWeight: 700,
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.5rem',
    lineHeight: 1.22,
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: 48,
    fontSize: '3rem',
    lineHeight: 1.2,
  },
}))

export const HelpEmblaViewport = styled(Box)({
  overflow: 'hidden',
})

export const HelpEmblaTrack = styled(Box)({
  display: 'flex',
})

export const HelpSlide = styled(Box)(({ theme }) => ({
  flex: '0 0 100%',
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 16,
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    gap: 32,
    alignItems: 'center',
  },
}))

export const HelpSlideImage = styled(Box)({
  overflow: 'hidden',
  width: 300,
  height: 300,
  '& img': {
    objectFit: 'cover',
    width: 300,
    height: 300,
  },
})

export const HelpSlideContent = styled(Box)(({ theme }) => ({
  padding: '8px 0',
  [theme.breakpoints.up('md')]: {
    flex: 1,
  },
}))

export const HelpPreviews = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: 24,
  marginTop: 32,
})

export const HelpPreviewItem = styled(Box, {
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
