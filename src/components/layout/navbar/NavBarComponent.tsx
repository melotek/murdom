import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import {
  Box,
  BoxProps,
  Container,
  ContainerProps,
  List,
  ListItem,
  Slide,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Hamburger from 'hamburger-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { NextLink } from 'src/components/shared/link'
import content from '../../../../data'
type Props = {}

interface ExpandMorePropsContainer extends ContainerProps {
  isOpen: boolean
  match: boolean
  theme?: any
}
interface ExpandMorePropsBox extends BoxProps {
  isOpen: boolean
  match: boolean
}

const TopBarCustom = styled((props: ExpandMorePropsContainer) => {
  const { isOpen, match, theme, ...other } = props
  return <Container {...other} />
})(({ theme, isOpen, match }) => ({
  // cursor: "pointer",
  backgroundColor: isOpen
    ? theme.palette.primary.main
    : theme.palette.background.default,
  position: !match ? 'absolute' : 'relative',
  width: '100%',
  zIndex: !match ? 30 : 300,
  marginTop: match && theme.spacing(2),
  marginBottom: match && theme.spacing(2),
  height: match ? null : isOpen ? `100vh` : 114,
  transition: theme.transitions.create(['background-color', 'height'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
}))

const ListCustom = styled((props: ExpandMorePropsBox) => {
  const { isOpen, match, ...other } = props
  return <Box {...other} />
})(({ theme, match, isOpen }) => ({
  // cursor: "pointer",
  overflow: !match && 'hidden',
  height: match ? null : isOpen ? `100vh` : 0,
  paddingLeft: 4,
  paddingRight: 4,
  transition:
    !match &&
    theme.transitions.create(['height'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut,
    }),
}))

const NavBarComponent = (props: Props) => {
  const [isOpen, setOpen] = useState(false)
  const theme = useTheme()
  const topBarRef = useRef<HTMLElement | null>(
    null
  ) as React.MutableRefObject<any>
  const [marginTop, setMarginTop] = useState(0)

  const match = useMediaQuery(theme.breakpoints.up('md'))
  const [offsetYinView, midleOffset] = useState<number>()

  ///wysokość strony / offsetbottom - offsetTop / 2

  ///5000 / 500 - 0 / 2 = 5000 / 250 = 20

  // 250 ?

  const router = useRouter()

  console.log()

  return (
    <TopBarCustom isOpen={isOpen} match={match} theme={theme}>
      <Box ref={topBarRef}>
        <Box
          py={match ? 0 : 2}
          justifyContent="space-between"
          alignItems="center"
          display="flex"
        >
          <Image width={70} height={72} src="/Logo.png" />
          {match && (
            <ListCustom
              display="flex"
              isOpen={isOpen}
              component="nav"
              match={match}
              sx={{ justifyContent: 'center' }}
            >
              <Box display="flex" width="100%">
                <List
                  sx={{
                    display: match && 'flex',
                    flexDirection: match && 'row',
                  }}
                >
                  {content.navbar.map((_: any) => (
                    <ListItem
                      key={_.href}
                      sx={{
                        textAlign: 'center',
                        justifyContent: 'center',
                        fontWeight: 500,
                      }}
                    >
                      <NextLink
                        sx={{
                          display: 'block',
                          position: 'relative',
                          padding: ' 0.15em 0',
                          textDecoration: 'none',

                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            // display:"none",
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '0.15em',
                            backgroundColor: match
                              ? theme.palette.primary.main
                              : theme.palette.common.white,
                            opacity: router.asPath === _.href ? 1 : 0,
                            transition: 'opacity 300ms, transform 300ms',
                          },

                          '&:hover::before': {
                            opacity: 1,
                            transform: 'translate3d(0, 0.15em, 0)',
                          },

                          '&:focus::before': {
                            opacity: 1,
                            transform: 'translate3d(0, 0.15em, 0)',
                          },
                        }}
                        color={
                          match
                            ? theme.palette.primary.main
                            : theme.palette.common.white
                        }
                        href={_.href}
                      >
                        {_.text.toUpperCase()}
                      </NextLink>
                    </ListItem>
                  ))}
                </List>
                <List
                  sx={{
                    display: 'flex',
                    // width: 200,
                    paddingLeft: 2,
                    margin: 'auto',
                  }}
                >
                  <ListItem>
                    <NextLink href="facebook.com">
                      <FacebookIcon sx={{ fill: theme.palette.primary.main }} />
                    </NextLink>
                  </ListItem>
                  <ListItem>
                    <NextLink href="linkendin.com">
                      <LinkedInIcon sx={{ fill: theme.palette.primary.main }} />
                    </NextLink>
                  </ListItem>
                  <ListItem>
                    <NextLink href="instagram.com">
                      <InstagramIcon
                        sx={{ fill: theme.palette.primary.main }}
                      />
                    </NextLink>
                  </ListItem>
                </List>
              </Box>
            </ListCustom>
          )}
          <NextLink
            sx={{
              display: 'block',
              position: 'relative',
              padding: ' 0.15em 0',
              textDecoration: 'none',
              cursor: 'pointer',

              '&::before': {
                content: '""',
                position: 'absolute',
                // display:"none",
                bottom: 0,
                left: 0,
                width: '100%',
                height: '0.15em',
                backgroundColor: theme.palette.common.white,
                opacity: 0,
                transition: 'opacity 300ms, transform 300ms',
              },

              '&:hover::before': {
                opacity: 1,
                transform: 'translate3d(0, 0.15em, 0)',
              },
              '&:focus::before': {
                opacity: 1,
                transform: 'translate3d(0, 0.15em, 0)',
              },
            }}
            href="tel:+48 600 795 925"
            color={isOpen ? '#fff' : theme.palette.primary.main}
          >
            <Typography variant="h6" component="p">
              +48 600 795 925
            </Typography>
          </NextLink>
          {!match && (
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color={isOpen ? '#fff' : theme.palette.primary.main}
            />
          )}
        </Box>
      </Box>

      {!match && (
        <ListCustom
          match={match}
          isOpen={isOpen}
          component="nav"
          sx={{ justifyContent: 'center' }}
        >
          <>
            <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
              <List
                sx={{
                  height: 'fit-content',
                  marginTop: `calc(30vh - ${marginTop}px)`,
                }}
              >
                {content.navbar.map((_: any) => (
                  <ListItem
                    key={_.href}
                    sx={{
                      textAlign: 'center',
                      justifyContent: 'center',
                      fontWeight: 500,
                    }}
                  >
                    <NextLink
                      sx={{
                        display: 'block',
                        position: 'relative',
                        padding: ' 0.15em 0',
                        textDecoration: 'none',

                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          // display:"none",
                          bottom: 0,
                          left: 0,
                          width: '100%',
                          height: '0.15em',
                          backgroundColor: theme.palette.common.white,
                          opacity: router.asPath === _.href ? 1 : 0,
                          transition: 'opacity 300ms, transform 300ms',
                        },

                        '&:hover::before': {
                          opacity: 1,
                          transform: 'translate3d(0, 0.15em, 0)',
                        },

                        '&:focus::before': {
                          opacity: 1,
                          transform: 'translate3d(0, 0.15em, 0)',
                        },
                      }}
                      color={theme.palette.common.white}
                      href={_.href}
                    >
                      {_.text.toUpperCase()}
                    </NextLink>
                  </ListItem>
                ))}
              </List>
            </Slide>
            <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
              <List
                sx={{
                  display: 'flex',
                  width: 200,
                  paddingTop: 7,
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
                    <LinkedInIcon sx={{ fill: theme.palette.common.white }} />
                  </NextLink>
                </ListItem>
                <ListItem>
                  <NextLink href="instagram.com">
                    <InstagramIcon sx={{ fill: theme.palette.common.white }} />
                  </NextLink>
                </ListItem>
              </List>
            </Slide>
          </>
        </ListCustom>
      )}
    </TopBarCustom>
  )
}

export default NavBarComponent
