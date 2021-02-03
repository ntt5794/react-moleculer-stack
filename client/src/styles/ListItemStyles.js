import { makeStyles } from '@material-ui/core'

export const useListItemStyles = makeStyles(theme => ({
  root: {
    borderRadius: theme.shape.borderRadius,
    border: `solid 1px ${theme.palette.primary.border}`,
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    paddingTop: 0,
    paddingBottom: 0
  }
}));

export const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
}));