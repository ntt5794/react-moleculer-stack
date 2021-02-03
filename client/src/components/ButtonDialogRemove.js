import React from 'react'
import { DeleteOutlined as DeleteOutlinedIcon } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import { useSnackbar } from 'notistack'

function ButtonDialogRemove (props) {
  const { enqueueSnackbar } = useSnackbar()
  const { apiCall, id, callback, className, title } = props
  const [open, setOpen] = React.useState(false)
  const handleToggleDialog = () => {
    setOpen(!open)
  }

  const handleSubmitRemove = () => {
    apiCall({ id }).then(res => {
      if (res.ok) {
        handleToggleDialog()
        callback()
      }
      enqueueSnackbar(res.msg, {
        variant: res.ok ? 'success' : 'error'
      })
    })
  }

  return (
    <>
      <IconButton className={className} onClick={handleToggleDialog}>
        <DeleteOutlinedIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleToggleDialog}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Remove <strong>{title}</strong>?</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            This action cannot be undone!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToggleDialog} color='inherit' variant='outlined'>
            Cancel
          </Button>
          <Button onClick={handleSubmitRemove} color='primary' variant='outlined' autoFocus>
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
export default ButtonDialogRemove
