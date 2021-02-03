import React from 'react'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import Skeleton from '@material-ui/lab/Skeleton'

export function SkeletonGrid (props) {
  const { num, xs, md, lg, spacing, height } = props

  const items = []
  for (let i = 0; i < num; i++) {
    const item = (
      <Grid item key={i} xs={xs} md={md} lg={lg}>
        <Skeleton variant='rect' height={height} />
      </Grid>
    )
    items.push(item)
  }

  return (
    <Grid container spacing={spacing}>
      {items}
    </Grid>
  )
}

SkeletonGrid.propTypes = {
  num: PropTypes.number.isRequired,
  xs: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  spacing: PropTypes.number
}
