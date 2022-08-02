import { Container, Paper, useTheme } from '@mui/material'
import { SvgLayer } from '.'

type Props = {}

const FooterComponent = (props: Props) => {
	const theme = useTheme()
	return (
		<Container>

			<Paper elevation={0} sx={{ background: theme.palette.primary.main }}  >
				<SvgLayer />

			</Paper >
		</Container >
	)
}

export default FooterComponent


