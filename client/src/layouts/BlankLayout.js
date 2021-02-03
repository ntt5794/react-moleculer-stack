import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { useBlankLayoutStyles } from './BlankLayoutClasses'

function BlankLayout (props) {
  const { children } = props
  const classes = useBlankLayoutStyles()
  return (
    <div className={classes.root}>
      <CssBaseline />
      {children}
    </div>
  )
}

export default BlankLayout
