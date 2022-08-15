import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import content from 'data'
import Link from 'next/link'
import { useRef } from 'react'
import { NextLink } from 'src/components/shared/link'
import SvgMailSvgrepoCom from 'src/UI/MailSvgrepoCom'
import SvgPhoneCallSvgrepoCom from 'src/UI/PhoneCallSvgrepoCom'
import { SvgLayer } from '.'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
type NIP = number
type REGON = number

type ContentRow = {
  content: string | number
  title?: string
  icon?: any
}

const numerNip: NIP = 6681765763
const numerTel: string = '600 795 925'
const numerRegon: REGON = 300796917
const nazwaFirmy: string =
  'Sylwester Krzyżostaniak - Przedsiębiorstwo Budowlane MURDOM'
const email: string = 'murdom@vp.pl'

const FooterRowComponent = ({ title, content, icon }: ContentRow) => {
  const theme = useTheme()
  return (
    <Box display="flex" flexDirection="row">
      {title && (
        <Typography
          variant="body2"
          gutterBottom
          mr={1}
          my={0.7}
          alignSelf="center"
          color={theme.palette.common.white}
        >
          {title}
        </Typography>
      )}

      {icon && (
        <Box width={32} height={32} my={0.7} mr={1} alignSelf="center">
          {icon}
        </Box>
      )}
      <Typography my={0.7} variant="body1" color={theme.palette.common.white}>
        {' '}
        {content}{' '}
      </Typography>
    </Box>
  )
}

const FooterComponent = () => {
  const theme = useTheme()
const titleRef= useRef(null)
  const { navbar } = content

  const match = useMediaQuery(theme.breakpoints.up('md'))




  return (
    <Box sx={{ background: theme.palette.primary.main }} pt={8} pb={4} mt={8}>
      <Container>
        <Grid container xs={12} spacing={2} mb={match ? 4 : 0}>
          <Grid item xs={match ? 4 : 12}>
            <Typography variant="h6" mb={1} color={theme.palette.common.white}>
              Firma
            </Typography>
            <FooterRowComponent
              // title="Nazwa firmy:"
              content={nazwaFirmy}
            />
            <FooterRowComponent title="Numer NIP:" content={numerNip} />
          </Grid>
          <Grid item xs={match ? 4 : 6}>
            <Typography ref={titleRef}  variant="h6" mb={1} color={theme.palette.common.white}>
              Dane kontaktowe
            </Typography>
            <Box>
              <a
                href={`tel:${numerTel}`}
                style={{
                  textDecoration: 'none',
                  color: theme.palette.common.white,
                  cursor: 'pointer',
                }}
              >
                <FooterRowComponent
                  icon={
                    <Box sx={{ width: 24, height: 24 }}>
                      <SvgPhoneCallSvgrepoCom
                        fill={theme.palette.common.white}
                        width={32}
                        height={32}
                      />
                    </Box>
                  }
                  content={numerTel}
                />
              </a>
            </Box>
            <Box>
              <a
                href={`mailto:${email}`}
                style={{
                  textDecoration: 'none',
                  color: theme.palette.common.white,
                  cursor: 'pointer',
                }}
              >
                <FooterRowComponent
                  icon={
                    <Box sx={{ width: 24, height: 24 }}>
                      <SvgMailSvgrepoCom
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
          </Grid>
          <Grid item xs={match ? 2 : 6}>
            <ul style={{listStyle: "none", 
						marginTop: 0,
					padding: 0
						 }}>
              {navbar.map((_: any, index: any) => (
                <li key={_.href}
								 style={{padding: `${theme.spacing(.5)} 0`}}
								  >
                  <Link href={_.href} >
                    <a style={{textDecoration: "none", color: theme.palette.common.white}}>{_.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={2}>
						

					</Grid>
        </Grid>
				<Grid container xs={12}>
				<Grid item xs={12}>

			
				<Typography ref={titleRef}  variant="h6" mb={1} color={theme.palette.common.white}>
              Jesteśmy w social mediach
            </Typography>
						</Grid>
						<Grid item xs={1}>


						<List
                  sx={{
                    display: 'flex',
                    // width: 200,
                    paddingLeft: 0,
                    margin: 'auto',
                  }}
                >
                  <ListItem>
                    <NextLink href="facebook.com">
                      <FacebookIcon sx={{ fill: theme.palette.common.white }} />
                    </NextLink>
                  </ListItem>
                  <ListItem>
                    <NextLink href="linkendin.com">
                      <LinkedInIcon sx={{ fill: theme.palette.common.white}} />
                    </NextLink>
                  </ListItem>
                  <ListItem>
                    <NextLink href="instagram.com">
                      <InstagramIcon
                        sx={{ fill: theme.palette.common.white }}
                      />
                    </NextLink>
                  </ListItem>
                </List></Grid>

				</Grid>
				<Grid container xs={12}  justifyContent="center">
									<Typography variant="body2" color={theme.palette.common.white}>
										Wszelkie prawa zastrzeżone Murdom.

									</Typography>

				</Grid>
      </Container>
      {/* <SvgLayer /> */}
    </Box>
  )
}

export default FooterComponent
