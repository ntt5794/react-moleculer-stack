import React from 'react'
import BaseLayout from '../../layouts/BaseLayout'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'

export default function ListFullHistory (props) {
  return (
    <BaseLayout nav='history'>
      <Toolbar>
        <Typography variant='h1'>Histories</Typography>
      </Toolbar>
      <Box p={3} />
    </BaseLayout>
  )
}
