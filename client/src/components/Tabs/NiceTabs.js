import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

export const NiceTabs = withStyles(theme => ({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 3,
    '& > div': {
      maxWidth: '60%',
      width: '100%',
      height: 10,
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
      backgroundColor: theme.palette.primary.main
    }
  }
}))(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />)

export const NiceTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(16),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1
    }
  }
}))(props => <Tab disableRipple {...props} />)
