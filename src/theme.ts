import { createTheme } from '@mui/material/styles'

const blue = '#4A90D9'
const blueDark = '#3A7BC8'
const blueLight = '#6BA8E8'

export const theme = createTheme({
  palette: {
    primary: {
      main: blue,
      light: blueLight,
      dark: blueDark,
    },
    secondary: {
      main: blueDark,
      light: blue,
      dark: '#2A6AB8',
    },
    background: {
      default: 'var(--color-cream)',
      paper: 'var(--color-cream)',
    },
    text: {
      primary: '#1c1c1c',
      secondary: '#5a5a6e',
    },
  },
  typography: {
    fontFamily: ['Inter', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.2,
      '@media (min-width:600px)': {
        fontSize: '2.75rem',
      },
      '@media (min-width:900px)': {
        fontSize: '3.5rem',
      },
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 700,
      lineHeight: 1.3,
      '@media (min-width:600px)': {
        fontSize: '2.25rem',
      },
      '@media (min-width:900px)': {
        fontSize: '2.75rem',
      },
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (min-width:600px)': {
        fontSize: '1.125rem',
      },
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      '@media (min-width:600px)': {
        fontSize: '1.125rem',
      },
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 0,
          padding: '6px 16px',
          fontSize: '0.875rem',
          border: 'none',
          borderBottom: '2px solid transparent',
          backgroundColor: 'transparent',
          color: '#5a5a6e',
          transition: 'color 0.2s ease, border-color 0.2s ease',
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&.Mui-selected': {
            backgroundColor: 'transparent',
            borderBottom: `2px solid ${blue}`,
            color: blue,
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          gap: 0,
          '& .MuiToggleButtonGroup-grouped': {
            border: 'none',
            '&:not(:first-of-type)': {
              borderRadius: 0,
              borderLeft: 'none',
            },
            '&:first-of-type': {
              borderRadius: 0,
            },
          },
        },
      },
    },
  },
})
