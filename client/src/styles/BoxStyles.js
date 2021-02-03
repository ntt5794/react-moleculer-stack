import { makeStyles } from '@material-ui/core'

export const useBoxBorderStyles = makeStyles(theme => ({
  root: {
    borderRadius: theme.shape.borderRadius,
    border: `solid 1px ${theme.palette.primary.border}`
  }
}))

export const useOverflowBoxBorderStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflow: 'auto',
    borderRadius: theme.shape.borderRadius,
    border: `solid 1px ${theme.palette.primary.border}`
  }
}))
