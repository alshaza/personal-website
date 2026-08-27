import { Box, styled } from '@mui/material'

export const CalendarSectionContainer = styled(Box)({
  marginTop: 'var(--section-spacing)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '64px 24px',
  background:
    'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 20%, #ffffff 80%, rgba(255, 255, 255, 0) 100%)',
})

export const CalendarFrame = styled(Box)({
  width: '100%',
  '& iframe': {
    display: 'block',
    width: '100%',
    height: 700,
    border: 0,
  },
})
