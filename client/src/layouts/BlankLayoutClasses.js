import { makeStyles } from '@material-ui/core'

export const useBlankLayoutStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    flexGrow: 1,
    minHeight: '100vh',
    maxWidth: '100vw'
  }
}))
