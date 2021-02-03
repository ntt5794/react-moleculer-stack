import React from 'react'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types'

function LoadingButtonWrap (props) {
  const { children, style, loading } = props
  return (
    <Box display='inline-block' position='relative' style={style}>
      {children}
      {loading && (
        <Box position='absolute' left={0} right={0} bottom={0} top={0}>
          <Box display='flex' justifyContent='center' alignItems='center' height='100%'>
            <CircularProgress size={14} color='secondary' />
          </Box>
        </Box>
      )}
    </Box>
  )
}

LoadingButtonWrap.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default LoadingButtonWrap
