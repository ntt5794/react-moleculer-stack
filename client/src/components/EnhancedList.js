import React from 'react'
import Box from '@material-ui/core/Box'
import Checkbox from '@material-ui/core/Checkbox'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import { useBoxTableStyles } from '../styles/TableListStyles'
import TablePagination from '@material-ui/core/TablePagination'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { useButtonStyles } from '../styles/ButtonStyles'
import {
  DeleteOutlined as DeleteOutlinedIcon
} from '@material-ui/icons'
import { useSnackbar } from 'notistack'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Dialog from '@material-ui/core/Dialog'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  }
}))

function EnhancedList (props) {
  const {
    headRows, items, rowBuilder, sortable, keyItem, deleteSelectedApi, callbackDeleteSelected,
    count, rowsPerPage, page, onChangePage, onChangeRowsPerPage, selected, onSortChange, border
  } = props
  const boxTableClasses = useBoxTableStyles()
  const buttonClasses = useButtonStyles()
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar()
  const [checkedList, setCheckedList] = React.useState(selected || [])
  const [sort, setSort] = React.useState(sortable ? sortable.default || sortable.fields[0] || null : null)
  const [sortType, setSortType] = React.useState(sortable ? sortable.type || 'desc' : null)

  const [open, setOpen] = React.useState(false)
  const handleToggleDialog = () => {
    setOpen(!open)
  }
  const [loadingDeleteAll, setLoadingDeleteAll] = React.useState(false)
  const handleSubmitDeleteAll = () => {
    if (deleteSelectedApi) {
      setLoadingDeleteAll(true)
      deleteSelectedApi({ ids: checkedList }).then(res => {
        if (res.ok) {
          handleToggleDialog()
          setCheckedList([])
          if (callbackDeleteSelected) callbackDeleteSelected()
        }
        enqueueSnackbar(res.msg, {
          variant: res.ok ? 'success' : 'error'
        })
        setLoadingDeleteAll(false)
      })
    }
  }

  const handleToggleCheckAll = (event) => {
    if (event.target.checked) {
      const newSelected = items.map(n => n[keyItem])
      setCheckedList(newSelected)
    } else {
      setCheckedList([])
    }
  }
  const handleToggleCheckItem = (key) => {
    const currentIndex = checkedList.indexOf(key)
    const newChecked = [...checkedList]
    if (currentIndex === -1) {
      newChecked.push(key)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setCheckedList(newChecked)
  }

  const handleSortChange = (key) => {
    let newType = sortType
    if (key === sort) {
      newType = sortType === 'desc' ? 'asc' : 'desc'
    }
    setSort(key)
    setSortType(newType)

    const newSort = { key: key, type: newType }
    if (onSortChange) onSortChange(newSort)
  }

  const handlePageChange = (event, p) => {
    if (onChangePage) onChangePage(p + 1)
  }

  const buttonDeleteSelected = (
    <Box ml={3}>
      <Button
        style={{ marginLeft: 6 }}
        className={buttonClasses.danger}
        variant='outlined'
        startIcon={<DeleteOutlinedIcon />}
        disabled={loadingDeleteAll}
        onClick={handleToggleDialog}
      >
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleToggleDialog}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Remove all selected</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            This action cannot be undone!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToggleDialog} color='inherit' variant='outlined'>
            Cancel
          </Button>
          <Button onClick={handleSubmitDeleteAll} color='primary' variant='outlined' autoFocus>
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )

  return (
    <Box classes={border === false ? null : boxTableClasses}>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell padding='checkbox'>
              <Checkbox
                color='primary'
                indeterminate={checkedList.length > 0 && checkedList.length < items.length}
                checked={checkedList.length === items.length}
                inputProps={{ 'aria-label': 'select all desserts' }}
                onChange={handleToggleCheckAll}
              />
            </TableCell>
            {headRows.map(item => (
              <TableCell
                key={item.key}
                align={item.align || 'left'}
                valign={item.valign}
                sortDirection={sort === item.key ? sortType : false}
              >
                {sortable && sortable.fields.includes(item.key) ? (
                  <TableSortLabel
                    active={sort === item.key}
                    direction={sortType}
                    onClick={() => handleSortChange(item.key)}
                  >
                    {item.name}
                    {sort === item.key ? (
                      <span className={classes.visuallyHidden}>
                        {sortType === 'desc' ? 'sorted descending' : 'sorted ascending'}
                      </span>
                    ) : null}
                  </TableSortLabel>
                ) : item.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(item => (
            <TableRow hover key={item[keyItem]}>
              <TableCell padding='checkbox'>
                <Checkbox
                  color='primary'
                  checked={checkedList.indexOf(item[keyItem]) !== -1}
                  inputProps={{ 'aria-label': 'select all desserts' }}
                  onChange={() => handleToggleCheckItem(item[keyItem])}
                />
              </TableCell>
              {rowBuilder(item)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Grid container>
        <Grid container alignItems='center' item xs={12} md={6}>
          {checkedList.length > 0 && (
            <Box display='flex' alignItems='center' px={3}>
              <Box fontSize={16}>{checkedList.length} selected</Box>
              {deleteSelectedApi && buttonDeleteSelected}
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component='div'
            count={count}
            rowsPerPage={rowsPerPage}
            page={page - 1}
            backIconButtonProps={{
              'aria-label': 'previous page'
            }}
            nextIconButtonProps={{
              'aria-label': 'next page'
            }}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={onChangeRowsPerPage}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
export default EnhancedList
