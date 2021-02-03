import { green } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'
import '@openfonts/ibm-plex-serif_all'
import '@openfonts/ibm-plex-sans_all'
import '@openfonts/ibm-plex-mono_all'

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2848A3',
      white: '#fff',
      dark: '#0F1C42',
      border: '#DFE2EB',
      borderDarker: '#E5E5E5'
    },
    secondary: {
      main: '#0F1C42'
    },
    error: {
      main: '#CE3232'
    },
    success: {
      main: green[500]
    },
    gradient: {
      orange: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    background: {
      default: '#f3f3f3'
    }
  },
  typography: {
    fontSize: 12,
    fontFamily: 'IBM Plex Sans',
    fontWeight: 400,
    h1: {
      fontSize: '2.25rem',
      marginTop: '1rem',
      marginBottom: '1rem',
      fontWeight: 300
    },
    h2: {
      fontSize: '2rem',
      marginTop: '1rem',
      marginBottom: '1rem',
      fontWeight: 600
    },
    h3: {
      fontSize: '1.75rem',
      marginTop: '1rem',
      marginBottom: '1rem',
      fontWeight: 600
    },
    h4: {
      fontSize: '1.5rem',
      marginTop: '1rem',
      marginBottom: '1rem',
      fontWeight: 600
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600
    }
  },
  status: {
    success: 'green',
    warning: 'yellow',
    danger: 'orange'
  },
  overrides: {
    MuiTableCell: {
      root: {
        fontSize: '0.875rem'
      },
      footer: {
        fontSize: '0.875rem'
      }
    }
  }
})

export default theme
