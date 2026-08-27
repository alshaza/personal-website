import { Box, styled } from '@mui/material'

const CALENDAR_FADE_MASK =
  'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), ' +
  'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'

export const CalendarSectionContainer = styled(Box)({
  marginTop: 'var(--section-spacing)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '64px 24px',
})

export const CalendarBackground = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '48px 24px',
  backgroundColor: '#ffffff',
  maskImage: CALENDAR_FADE_MASK,
  maskComposite: 'intersect',
})

export const CalendarFrame = styled(Box)(({ theme }) => ({
  width: '100%',
  '& iframe': {
    display: 'block',
    width: '100%',
    height: 700,
    border: 0,
    [theme.breakpoints.down('sm')]: {
      height: 1225,
    },
  },
}))
