import { makeStyles } from '@material-ui/core'

export const useListNavStyles = makeStyles(theme => ({
  root: {
    // paddingRight: theme.spacing(1)
  }
}))

export const useListItemNavStyles = makeStyles(theme => ({
  root: {
    color: 'rgba(0, 0, 0, 0.75)',
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    borderTopRightRadius: theme.spacing(3),
    borderBottomRightRadius: theme.spacing(3),
    '&:hover': {
      backgroundColor: `${theme.palette.primary.main}25!important`
    },
    '&:focusVisible': {
      backgroundColor: `${theme.palette.primary.main}30!important`
    }
  },
  focusVisible: {
    backgroundColor: `${theme.palette.primary.main}60!important`
  },
  selected: {
    color: theme.palette.primary.main,
    backgroundColor: `${theme.palette.primary.main}20!important`,
    fontWeight: 500
  }
}))

export const useListItemIconNavStyles = makeStyles(theme => ({
  root: {
    color: 'inherit',
    minWidth: '40px'
  }
}))

export const useListItemTextNavStyles = makeStyles(theme => ({
  primary: {
    fontWeight: 'inherit',
    fontSize: '0.875rem'
  }
}))
