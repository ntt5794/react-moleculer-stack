import FileIcon from 'react-file-icon'
import React from 'react'
import mime from 'mime-types'
import theme from '../configs/theme'

export default function (props) {
  const { filename } = props
  const type = mime.lookup(filename)
  let extension = null
  if (type) extension = mime.extension(type)
  return (
    <FileIcon
      extension={extension}
      color={theme.palette.primary.main}
      labelColor={theme.palette.primary.dark}
      labelTextColor={theme.palette.primary.white}
      type='document'
      {...props}
    />
  )
}
