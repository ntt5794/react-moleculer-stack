import theme from '../theme'

const options = {
  search: false,
  sorting: false,
  draggable: false,
  actionsCellStyle: {
    paddingLeft: theme.spacing(2)
  },
  pageSizeOptions: [5, 10, 20, 50],
  headerStyle: {
    backgroundColor: theme.palette.background.default,
    borderWidth: '2px 0 2px 0',
    borderStyle: 'solid',
    borderColor: theme.palette.primary.borderDarker
  }
}
export default options
