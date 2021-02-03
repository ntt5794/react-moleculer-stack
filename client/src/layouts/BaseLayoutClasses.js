import { makeStyles } from '@material-ui/core'
import wolfEye from '../assets/brand/wolfEye.png'

export const useAppBarStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(30deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
    color: theme.palette.primary.white,
    boxShadow: theme.shadows[0],
    // borderBottom: `solid 1px ${theme.palette.primary.border}`,
    zIndex: theme.zIndex.drawer + 1
  }
}))

export const useAppBarToolbarStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${wolfEye})`,
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: '45%',
    backgroundPositionX: '40%'
  }
}))

const drawerWidth = 200
export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'relative'
  },
  logoImg: {
    width: '30px',
    height: '30px',
    marginLeft: '4px',
    marginRight: '4px'
  },
  logoLink: {
    display: 'flex',
    color: theme.palette.primary.white,
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.primary.white
    }
  },
  listItem: {
    paddingLeft: theme.spacing(3)
  },
  drawer: {
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(0)
    }
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.white
  },
  toolbar: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    position: 'relative',
    minHeight: '100vh'
  },
  main: {
    flexGrow: 1
  }
}))
