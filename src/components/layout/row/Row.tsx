import { Box } from '@mui/material'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Row = ({ children }: Props) => {
  return (
    <Box py={2} px={2} >{children}</Box>
  )
}

export default Row