import React from 'react'
import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { Helmet } from 'react-helmet'
import BlankLayout from '../layouts/BlankLayout'

export default function () {
  return (
    <BlankLayout>
      <Helmet>Page Not Found!</Helmet>
      <Box px={3} display='flex' justifyContent='center' alignItems='center' style={{ height: '100vh' }}>
        <Typography style={{ fontSize: '3rem' }}>Page Not Found!</Typography>
      </Box>
    </BlankLayout>
  )
}
