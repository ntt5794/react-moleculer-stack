import { makeStyles } from '@material-ui/core'
import { green } from '@material-ui/core/colors'

export const useDangerChipStyles = makeStyles(theme => ({
  outlinedPrimary: {
    color: theme.palette.error.main,
    borderColor: theme.palette.error.main
  }
}))

export const useSuccessChipStyles = makeStyles(theme => ({
  outlinedPrimary: {
    color: green[700],
    borderColor: green[700]
  }
}))

export const usePrimaryChipStyles = makeStyles(theme => ({
  outlinedPrimary: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main
  }
}))
