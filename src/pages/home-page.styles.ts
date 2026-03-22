import { Box, styled } from '@mui/material'

export const MainContainer = styled(Box)(({ theme }) => ({
  paddingLeft: 16,
  paddingRight: 16,
  [theme.breakpoints.up('sm')]: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: 64,
    paddingRight: 64,
  },
}))
