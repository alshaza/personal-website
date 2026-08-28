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
  fontFamily: "Georgia, Cambria, 'Times New Roman', Times, serif",
  fontSize: '1.2rem',
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

export const BlogPostMeta = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 16,
  marginBottom: 24,
})

export const BlogPostActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 16,
  marginTop: 32,
  paddingTop: 24,
  borderTop: `1px solid ${theme.palette.divider}`,
}))

const CATEGORY_PALETTE = [
  { bg: '#E3F2FD', text: '#1565C0' },
  { bg: '#FCE4EC', text: '#AD1457' },
  { bg: '#E8F5E9', text: '#2E7D32' },
  { bg: '#FFF3E0', text: '#E65100' },
  { bg: '#F3E5F5', text: '#6A1B9A' },
  { bg: '#FFFDE7', text: '#F9A825' },
  { bg: '#E0F7FA', text: '#00838F' },
  { bg: '#EFEBE9', text: '#4E342E' },
]

export function categoryColor(categorySlug: string) {
  let hash = 0
  for (let i = 0; i < categorySlug.length; i++) hash = (hash * 31 + categorySlug.charCodeAt(i)) | 0
  return CATEGORY_PALETTE[Math.abs(hash) % CATEGORY_PALETTE.length]
}
