import { styled } from '@mui/material'

export const FormContainer = styled('form')({
  maxWidth: 560,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
})

export const HoneypotField = styled('input')({
  position: 'absolute',
  left: '-9999px',
  width: 1,
  height: 1,
  opacity: 0,
})
