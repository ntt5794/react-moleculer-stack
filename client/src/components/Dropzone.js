import React from 'react'
import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import FileIcon from './FileIcon'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import PropTypes from 'prop-types'

export default function Dropzone (props) {
  const { onFileChange } = props
  const [file, setFile] = React.useState(null)
  const [filename, setFilename] = React.useState('')
  const onDrop = React.useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0])
      setFilename(acceptedFiles[0].name)
    }
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  const classesDropzone = useDropzoneStyles()

  React.useEffect(() => {
    if (onFileChange && file && filename) {
      onFileChange(file, filename)
    }
  }, [file, filename, onFileChange])

  return (
    <div>
      <div {...getRootProps()} className={classesDropzone.wrapper}>
        <input multiple={false} {...getInputProps()} />
        <p>Drag 'n' drop file here, or click to select file</p>
        {isDragActive && (
          <div className={classesDropzone.overlay}>
            <Box height='100%' display='flex' justifyContent='center' alignItems='center'>
              <Box m='auto'>Drop the file here ...</Box>
            </Box>
          </div>
        )}
      </div>
      {file && (
        <Box align='center' mt={2}>
          <Box fontSize={20}>
            <TextField
              variant='outlined'
              placeholder='New file name'
              value={filename}
              required
              onChange={(e) => setFilename(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <FileIcon size={48} filename={file.name} />
                  </InputAdornment>
                )
              }}
            />
          </Box>
        </Box>
      )}
    </div>
  )
}

Dropzone.propTypes = {
  onFileChange: PropTypes.func
}

const useDropzoneStyles = makeStyles(theme => ({
  wrapper: {
    position: 'relative',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    border: `dashed 1px ${theme.palette.primary.border}`,
    cursor: 'pointer'
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.7)'
  }
}))
