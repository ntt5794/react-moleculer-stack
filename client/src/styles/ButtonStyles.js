import { makeStyles } from '@material-ui/core'
import red from '@material-ui/core/colors/red'
import grey from '@material-ui/core/colors/grey'

export const useIconButtonStyles = makeStyles(theme => ({
  danger: {
    color: red[400],
    '&:hover': {
      backgroundColor: red[100]
    }
  },
  primaryBgGradient: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`
  }
}))

export const useButtonStyles = makeStyles(theme => ({
  primaryBgGradient: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`
  },
  danger: {
    color: theme.palette.primary.white,
    backgroundColor: theme.palette.error.main,
    borderColor: red[400],
    '&:hover': {
      backgroundColor: red[600]
    }
  },
  dangerOutlined: {
    backgroundColor: theme.palette.primary.white,
    color: theme.palette.error.main,
    borderColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.primary.white
    }
  }
}))

export const useButtonPrimaryGradientStyles = makeStyles(theme => ({
  root: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
    '&:disabled': {
      background: `linear-gradient(45deg, ${theme.palette.primary.main}bf 30%, ${theme.palette.secondary.main}bf 90%)`,
      color: grey[400]
    }
  }
}))
