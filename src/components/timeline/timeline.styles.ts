import { Box, Typography, styled } from '@mui/material'

export const TimelineContainer = styled(Box)({
  marginTop: 'var(--section-spacing)',
})

export const TimelineSectionHeading = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: 32,
  [theme.breakpoints.up('md')]: {
    marginBottom: 48,
  },
}))

export const TimelineTrack = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: 900,
  margin: '0 auto',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 20,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: theme.palette.grey[300],
    [theme.breakpoints.up('md')]: {
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },
}))

export const TimelineItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'side',
})<{ side: 'left' | 'right' }>(({ theme, side }) => ({
  position: 'relative',
  paddingLeft: 52,
  paddingBottom: 40,

  '&::before': {
    content: '""',
    position: 'absolute',
    left: 13,
    top: 6,
    width: 16,
    height: 16,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    border: `3px solid ${theme.palette.background.default}`,
    boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
    zIndex: 1,
  },

  [theme.breakpoints.up('md')]: {
    paddingLeft: side === 'right' ? 'calc(50% + 40px)' : 0,
    paddingRight: side === 'left' ? 'calc(50% + 40px)' : 0,
    textAlign: side === 'left' ? 'right' : 'left',

    '&::before': {
      left: side === 'right' ? 'calc(50% - 8px)' : 'auto',
      right: side === 'left' ? 'calc(50% - 8px)' : 'auto',
    },
  },
}))

export const TimelineCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: 16,
  padding: 24,
  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
}))
