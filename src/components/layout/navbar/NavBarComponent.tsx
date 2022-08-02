import { Box, Container, ContainerProps, ListProps, BoxProps, easing, Link, List, ListItem, styled, useTheme, Slide, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Image from "next/Image"
import Hamburger from 'hamburger-react'
import { NextLink } from 'src/components/shared/link'
import content from "../../../../data"
import { useRouter } from 'next/router'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Row } from '../row'
type Props = {}



interface ExpandMorePropsContainer extends ContainerProps {
	isOpen: boolean;
}
interface ExpandMorePropsBox extends BoxProps {
	isOpen: boolean;
}

const TopBarCustom = styled((props: ExpandMorePropsContainer) => {
	const { isOpen, ...other } = props;
	return <Container {...other} />;
})(({ theme, isOpen }) => ({
	// cursor: "pointer",
	backgroundColor: isOpen ? theme.palette.primary.main : theme.palette.background.default,
	height: isOpen ? `100vh` : 114,
	transition: theme.transitions.create(['background-color', 'height'], {
		duration: theme.transitions.duration.standard,
		easing: theme.transitions.easing.easeInOut
	})
}));


const ListCustom = styled((props: ExpandMorePropsBox) => {
	const { isOpen, ...other } = props;
	return <Box {...other} />;
})(({ theme, isOpen }) => ({
	// cursor: "pointer",
	overflow: "hidden",
	height: isOpen ? `100vh` : 0,

	transition: theme.transitions.create(['height'], {
		duration: theme.transitions.duration.standard,
		easing: theme.transitions.easing.easeInOut
	})
}));





const NavBarComponent = (props: Props) => {
	const [isOpen, setOpen] = useState(false)
	const theme = useTheme();
	const topBarRef = useRef<HTMLElement | null>(null) as React.MutableRefObject<any>
	const [marginTop, setMarginTop] = useState(0)

	useEffect(() => {
		if (topBarRef.current) {

			setMarginTop(topBarRef.current.clientHeight / 2)
		}
	}, [topBarRef.current])

	const router = useRouter()



	return (
		<TopBarCustom isOpen={isOpen} >
			<Box ref={topBarRef}>
			


					<Box py={2} justifyContent="space-between" alignItems="center" display="flex" >
						<Image width={80} height={82} src="/Logo.png" />
						<NextLink sx={{
							display: "block",
							position: "relative",
							padding: " 0.15em 0",
							textDecoration: "none",


							'&::before': {
								content: '""',
								position: "absolute",
								// display:"none",
								bottom: 0,
								left: 0,
								width: "100%",
								height: "0.15em",
								backgroundColor: theme.palette.text.primary,
								opacity: 0,
								transition: "opacity 300ms, transform 300ms"
							},

							'&:hover::before': {
								opacity: 1,
								transform: "translate3d(0, 0.15em, 0)"
							},
							'&:focus::before': {
								opacity: 1,
								transform: "translate3d(0, 0.15em, 0)"
							}
						}} href="tel:+48 600 795 925" color={theme.palette.text.primary} >
							<Typography variant="h6" component="p">+48 600 795 925</Typography>
						</NextLink>

						<Hamburger toggled={isOpen} toggle={setOpen} color={isOpen ? "#fff" : theme.palette.primary.main} />
					</Box>	
			</Box>
			<ListCustom isOpen={isOpen} component="nav" sx={{ justifyContent: "center" }} >
				<>
					<Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
						<List sx={{ height: "fit-content", marginTop: `calc(30vh - ${marginTop}px)` }}>
							{content.navbar.map((_: any) =>
								<ListItem key={_.href} sx={{
									textAlign: "center",
									justifyContent: "center",
									fontWeight: 500
								}}>
									<NextLink

										sx={{
											display: "block",
											position: "relative",
											padding: " 0.15em 0",
											textDecoration: "none",



											'&::before': {
												content: '""',
												position: "absolute",
												// display:"none",
												bottom: 0,
												left: 0,
												width: "100%",
												height: "0.15em",
												backgroundColor: theme.palette.text.primary,
												opacity: router.asPath === _.href ? 1 : 0,
												transition: "opacity 300ms, transform 300ms"
											},

											'&:hover::before': {
												opacity: 1,
												transform: "translate3d(0, 0.15em, 0)"
											},

											'&:focus::before': {
												opacity: 1,
												transform: "translate3d(0, 0.15em, 0)"
											}
										}}
										color={theme.palette.text.primary} href={_.href}>{_.text.toUpperCase()}</NextLink>
								</ListItem>
							)}
						</List>



					</Slide>
					<Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>

						<List sx={{ display: "flex", width: 200, paddingTop: 7, margin: "auto" }}>
							<ListItem><NextLink href="facebook.com">
								<FacebookIcon sx={{ fill: theme.palette.text.primary }} />
							</NextLink></ListItem>
							<ListItem><NextLink href="linkendin.com" ><LinkedInIcon sx={{ fill: theme.palette.text.primary }} /></NextLink></ListItem>
							<ListItem><NextLink href="instagram.com"><InstagramIcon sx={{ fill: theme.palette.text.primary }} /></NextLink></ListItem>
						</List>
					</Slide></>

			</ListCustom>
		</TopBarCustom>
	)
}

export default NavBarComponent