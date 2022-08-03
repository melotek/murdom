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

	return (<Box display="flex" flexDirection={icon ? "row" : "column"} mb={1.5}>
		<Typography variant="body2" gutterBottom>{title}</Typography>

		{icon && <Box width={32} height={32} pr={1} >{icon}</Box>}
		<Typography variant="body1" > {content} </Typography>



	</Box>

	)
};

const FooterComponent = () => {
	const theme = useTheme()
	return (
		<Container>
			<Box sx={{ background: theme.palette.background.paper }} my={8}>

				<Paper elevation={0} sx={{ background: theme.palette.primary.main, display: "flex", width: "calc(100vw / 2 - 4rem" }}
				>
					<Box p={4}>
						<Typography variant="h6">Firma</Typography>
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

						<Typography variant="h6">Dane kontaktowe</Typography>
						<Box pt={2}>


							<a href={`tel:${numerTel}`} style={{ textDecoration: "none", color: theme.palette.text.primary, cursor: "pointer" }}>
								<FooterRowComponent
									icon={
										<Box>

											< SvgPhoneCallSvgrepoCom

												fill={theme.palette.background.paper}
												width={32}
												height={32}
											/>
										</Box>

									}
									content={numerTel}
								/></a>
						</Box>
						<Box pt={2}>


							<a href={`mailto:${email}`} style={{ textDecoration: "none", color: theme.palette.text.primary, cursor: "pointer" }}>
								<FooterRowComponent
									icon={
										<Box>

											< SvgMailSvgrepoCom

												fill={theme.palette.background.paper}
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
				</Paper >
				<SvgLayer />
			</Box >
		</Container >
	)
}

export default FooterComponent


