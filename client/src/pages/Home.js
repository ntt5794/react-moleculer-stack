import React from 'react'
import BaseLayout from '../layouts/BaseLayout'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { SkeletonGrid } from '../components/Skeleton'
import { Products } from './Products'

export default function () {
  const loading = false
  return (
    <BaseLayout nav='home'>
      <Box px={3}>
        {loading ? (
          <SkeletonGrid num={4} xs={12} md={3} lg={3} spacing={2} height={100} />
        ) :
        (
          <Products></Products>
        )}
      </Box>
    </BaseLayout>
  )
}
