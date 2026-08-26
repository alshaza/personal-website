import { Box, Stack, styled } from '@mui/material'

export const AppContainer = styled(Stack)({
  width: '100%',
  minHeight: '100vh',
  maxWidth: '1024px',
  margin: '0 auto',
  overflowX: 'clip',
})

export const MainContainer = styled(Box)({
  paddingLeft: 16,
  paddingRight: 16,
})
