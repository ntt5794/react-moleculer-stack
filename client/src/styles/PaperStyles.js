import { makeStyles } from '@material-ui/core'

export const usePaperStyles = makeStyles(theme => ({
  root: {
    borderRadius: theme.shape.borderRadius,
    // border: `solid 1px ${theme.palette.primary.border}`,
    padding: theme.spacing(0, 3)
  }
}))
