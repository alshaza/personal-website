import { Box, styled } from '@mui/material'

export const BlogPostList = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  listStyle: 'none',
  padding: 0,
  margin: 0,
})

export const BlogPostCard = styled('a')(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
  padding: '20px 24px',
  borderRadius: 12,
  border: `1px solid ${theme.palette.divider}`,
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    boxShadow: theme.shadows[2],
  },
}))

export const BlogPostBody = styled(Box)(({ theme }) => ({
  maxWidth: 720,
  '& img': {
    maxWidth: '100%',
    borderRadius: 8,
  },
  '& a': {
    color: theme.palette.primary.main,
  },
  '& h2, & h3': {
    marginTop: '1.5em',
    marginBottom: '0.5em',
  },
  '& p, & ul, & ol': {
    marginBottom: '1em',
    lineHeight: 1.7,
  },
}))
