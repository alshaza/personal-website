import { styled } from '@mui/material'

export const FormContainer = styled('form')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
})

export const HoneypotField = styled('input')({
  position: 'absolute',
  left: '-9999px',
  width: 1,
  height: 1,
  opacity: 0,
})
