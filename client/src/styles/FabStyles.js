import { makeStyles } from '@material-ui/core'

export const useFabGradientPrimary = makeStyles(theme => ({
  root: {
    position: 'fixed',
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    color: 'white',
    bottom: theme.spacing(4),
    left: '50%'
  }
}))
