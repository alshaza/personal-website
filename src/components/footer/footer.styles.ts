import { Box, Link, Typography, styled } from '@mui/material'

export const FooterContainer = styled(Box)(({ theme }) => ({
  marginTop: 'var(--section-spacing)',
  padding: '24px 0',
  borderTop: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 12,
}))

const footerLinksRow = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 20,
} as const

export const FooterLinks = styled(Box)(footerLinksRow)

export const FooterNav = styled('nav')(footerLinksRow)

export const FooterLink = styled(Link)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  color: theme.palette.text.primary,
  '&:hover': {
    color: theme.palette.primary.main,
  },
}))

export const FooterCopyright = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}))
