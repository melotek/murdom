import { Box, Container, Paper, Typography, useTheme } from '@mui/material';
import SvgMailSvgrepoCom from 'src/UI/MailSvgrepoCom';
import SvgPhoneCallSvgrepoCom from 'src/UI/PhoneCallSvgrepoCom';
import { SvgLayer } from '.';


type NIP = number;
type REGON = number;

type ContentRow = {
	content: string | number,
	title?: string,
	icon?: any
}

const numerNip: NIP = 6681765763;
const numerTel: string = "600 795 925";
const numerRegon: REGON = 300796917;
const nazwaFirmy: string = "Sylwester Krzyżostaniak - Przedsiębiorstwo Budowlane MURDOM";
const email: string = "murdom@vp.pl";

const FooterRowComponent = ({ title, content, icon }: ContentRow) => {
	const theme = useTheme()
	return (<Box display="flex" flexDirection="row">
		{title && <Typography variant="body2" gutterBottom mr={1} my={.7} alignSelf="center" color={theme.palette.common.white}>{title}</Typography>}

		{icon && <Box width={32} height={32} my={.7} mr={1} alignSelf="center" >{icon}</Box>}
		<Typography my={.7} variant="body1" color={theme.palette.common.white}> {content} </Typography>



	</Box>

	)
};

const FooterComponent = () => {
	const theme = useTheme()
	return (
		<Container>
			<Box sx={{ background: theme.palette.background.paper, }} my={8}>

				<Paper elevation={0} sx={{ background: theme.palette.primary.main, display: "flex" }}
				>
					<Box p={2}>
						<Box my={2}>


							<Typography variant="h6" mb={1} color={theme.palette.common.white}>Firma</Typography>
							<FooterRowComponent
								// title="Nazwa firmy:"
								content={nazwaFirmy}
							/>
							<FooterRowComponent
								title="Numer NIP:"
								content={numerNip}
							/>
							{/* <FooterRowComponent
							title="Numer Regon:"
							content={numerRegon}
						/> */}
						</Box>
						<Box my={2}>


							<Typography variant="h6" mb={1} color={theme.palette.common.white}>Dane kontaktowe</Typography>
							<Box >


								<a href={`tel:${numerTel}`} style={{ textDecoration: "none", color: theme.palette.common.white, cursor: "pointer" }}>
									<FooterRowComponent
										icon={
											<Box sx={{ width: 24, height: 24 }}>

												< SvgPhoneCallSvgrepoCom

													fill={theme.palette.common.white}
													width={32}
													height={32}
												/>
											</Box>

										}
										content={numerTel}
									/></a>
							</Box>
							<Box>


								<a href={`mailto:${email}`} style={{ textDecoration: "none", color: theme.palette.common.white, cursor: "pointer" }}>
									<FooterRowComponent
										icon={
											<Box sx={{ width: 24, height: 24 }}>

												< SvgMailSvgrepoCom

													fill={theme.palette.common.white}
													width={32}
													height={32}
												/>
											</Box>

										}
										content={email}
									/>
								</a>
							</Box>
						</Box>
					</Box>
				</Paper >
				{/* <SvgLayer /> */}
			</Box >
		</Container >
	)
}

export default FooterComponent


