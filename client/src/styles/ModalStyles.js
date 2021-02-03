import { makeStyles } from '@material-ui/core'

export const useModalStyles = makeStyles(theme => ({
    root: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    paper: {
        position: 'absolute',
        minWidth: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        }
}))