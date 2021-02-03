import { makeStyles } from '@material-ui/core'
import { deepOrange, green, orange, pink, red } from '@material-ui/core/colors'

const width = 30
const height = 30

export const useAvatarStyles = makeStyles(theme => ({
  deepOrange: {
    color: '#fff',
    backgroundColor: deepOrange[500],
    width,
    height
  },
  orange: {
    color: '#fff',
    backgroundColor: orange[500],
    width,
    height
  },
  red: {
    color: '#fff',
    backgroundColor: red[500],
    width,
    height
  },
  pink: {
    color: '#fff',
    backgroundColor: pink[500],
    width,
    height
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
    width,
    height
  }
}))
