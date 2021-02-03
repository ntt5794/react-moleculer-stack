import { makeStyles } from '@material-ui/core'

export const useCardFileStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: `solid 1px ${theme.palette.primary.border}`,
    '&:hover': {
      border: `solid 1px ${theme.palette.primary.borderDarker}`,
      boxShadow: '-4px 4px 8px 0px rgba(0, 0, 0, 0.08)'
    }
  }
}))

export const useCardAddFileStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderRadius: theme.shape.borderRadius,
    border: `dashed 1px ${theme.palette.primary.main}`,
    '&:hover': {
      border: `dashed 1px ${theme.palette.primary.dark}`,
      boxShadow: '-4px 4px 8px 0px rgba(0, 0, 0, 0.08)'
    }
  }
}))

export const useCardMediaFileStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    // display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    padding: '0.5rem',
    borderRight: `1px solid ${theme.palette.primary.border}`
    // backgroundColor: theme.palette.primary.border
  }
}))

export const useCardContentFileStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: '100%',
    padding: `${theme.spacing(1)}px!important`,
    overflowWrap: 'break-word'
  }
}))
