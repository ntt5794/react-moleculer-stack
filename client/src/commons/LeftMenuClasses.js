import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.primary.border}`
  },
  logoLink: {
    display: 'flex',
    color: theme.palette.primary.main,
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.primary.main
    }
  },
  logoImg: {
    width: '30px',
    height: '30px',
    marginLeft: '4px',
    marginRight: '4px'
  }
}))
