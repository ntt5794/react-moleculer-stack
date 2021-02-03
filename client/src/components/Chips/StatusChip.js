import React from 'react'
import Chip from '@material-ui/core/Chip'
import PropTypes from 'prop-types'
import { useDangerChipStyles, useSuccessChipStyles, usePrimaryChipStyles } from '../../styles/ChipStyles'

export default function StatusChip (props) {
  const { status, label } = props
  const dangerChipClasses = useDangerChipStyles()
  const successChipClasses = useSuccessChipStyles()
  const primaryChipClasses = usePrimaryChipStyles()
  switch (status) {
    case 'queue':
      return <Chip color='secondary' variant='variant' label={label} />
    case 'running':
      return <Chip classes={primaryChipClasses} size='medium' color='primary' variant='outlined' label={label} />
    case 'done':
      return <Chip classes={successChipClasses} size='medium' color='primary' variant='outlined' label={label} />
    case 'break':
      return <Chip classes={dangerChipClasses} size='medium' color='primary' variant='outlined' label={label} />
    default:
      return <Chip classes={dangerChipClasses} size='medium' color='primary' variant='outlined' label={label} />
  }
}

StatusChip.propTypes = {
  status: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}
