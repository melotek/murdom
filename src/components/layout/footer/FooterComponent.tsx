import { useTheme } from '@mui/material'
import { Container, Paper } from '@mui/material'
import React from 'react'
import { SvgLayer } from '.'

type Props = {}

const FooterComponent = (props: Props) => {
	const theme = useTheme()
	return (
		<Container> 

			<Paper elevation={0} sx={{background: theme.palette.primary.main}}  >
				<SvgLayer/>

			</Paper >
		</Container >
	)
}

export default FooterComponent


