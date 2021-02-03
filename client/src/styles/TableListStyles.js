import { makeStyles } from '@material-ui/core'

export const useBoxTableStyles = makeStyles(theme => ({
  root: {
    borderRadius: theme.shape.borderRadius,
    border: `solid 1px ${theme.palette.primary.border}`,
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    paddingTop: 0,
    paddingBottom: 0
  }
}))
