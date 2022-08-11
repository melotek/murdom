import LinkButtonContained from '@buttons/ButtonContained'
import {
  Box,
  Container,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import useWindowDimensions from '../../../../helpers/hooks/useWindowDimention'
type Props = {}

const HeaderComponent = (props: Props) => {
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.up('md'))
  const imageRefMobile = useRef(null as null | HTMLDivElement)
  const imageRef = useRef(null as null | HTMLDivElement)
  const [svgWidthMobile, setsvgWidthMobile] = React.useState(null)
  const [svgHeightMobile, setsvgHeightMobile] = React.useState(null)
  const [svgWidth, setsvgWidth] = React.useState(null)
  const [svgHeight, setsvgHeigh] = React.useState(null)
  const { height, width } = useWindowDimensions()
  const [imageinView, setimageinView] = React.useState(false)
  const [buttonInView, setButtonInView] = React.useState(true)
  const [contentInView, setContentInView] = React.useState(true)

  const contentRef = React.useRef(null)
  const buttonRef = React.useRef(null)

  const ImageIsInView = () => {
    if (!imageRef.current) {
      return
    } else {
      const rect = imageRef.current.getBoundingClientRect()
      return (
        rect.top - rect.height / 2 <= rect.height &&
        rect.bottom >= rect.height / 2
      )
    }
  }

  const ButtonIsInView = () => {
    if (!buttonRef.current) {
      return
    } else {
      const rect = buttonRef.current.getBoundingClientRect()
      return (
        rect.top - 600 <= rect.height && rect.bottom >= 300
      )
    }
  }
  const ContentIsInView = () => {
    if (!contentRef.current) {
      return
    } else {
      const rect = contentRef.current.getBoundingClientRect()
      return (
         rect.bottom >= 200
      )
    }
  }

  const ImageScrollHandler = () => {
    setButtonInView(ImageIsInView())
  
  }
  const ButtonScrollHandler = () => {
    setButtonInView(ButtonIsInView())
  
  }
  const ContentScrollHandler = () => {
    setContentInView(ContentIsInView())
  
  }

  React.useEffect(() => {
    setimageinView(ImageIsInView())
    window.addEventListener('scroll', ImageScrollHandler)
    return () => {
      window.removeEventListener('scroll', ImageScrollHandler)
    }
  }, [])
  React.useEffect(() => {
    setButtonInView(ButtonIsInView())
    window.addEventListener('scroll', ButtonScrollHandler)
    return () => {
      window.removeEventListener('scroll', ButtonScrollHandler)
    }
  }, [buttonInView])

  
  React.useEffect(() => {
    setContentInView(ContentIsInView())
    window.addEventListener('scroll', ContentScrollHandler)
    return () => {
      window.removeEventListener('scroll', ContentScrollHandler)
    }
  }, [contentInView])

  

  useEffect(() => {
    if (
      imageRefMobile?.current?.clientHeight &&
      imageRefMobile?.current?.clientWidth
    ) {
      setsvgWidthMobile(imageRefMobile.current.clientWidth)
      setsvgHeightMobile(imageRefMobile.current.clientHeight)
    }
  }, [imageRefMobile, width, height])

  useEffect(() => {
    if (imageRef?.current?.clientHeight && imageRef?.current?.clientWidth) {
      setsvgWidth(imageRef.current.clientWidth)
      setsvgHeigh(imageRef.current.clientHeight)
    }
  }, [imageRef, width, height])

  return (
		<>
    <Box pt={"114px"} pb={match ?  8 : 4}>
      {match ? (
				<Box display="flex">

          <Box width="50%" height="70vh" position="relative" ref={imageRef}>
      {/* svg here */}

            <Image
              style={
                {
                  // width: "100vw", height: "300px"
                }
              }
              src="/IMG-20220629-WA0007.jpg"
              layout={'fill'}
              width={320}
              height={300}
              objectFit="cover"
            />
          </Box>

          <Box
            px="calc(10vw - 12px)"
            // mt={12}
            sx={{
              alignContent: 'center',
              flexDirection: 'column',
              display: 'flex',
              maxWidth: '50%',
              alignSelf: 'center',
            }}
          >
            <Typography
              gutterBottom
              component="h1"
              variant="body1"
							color={theme.palette.common.blue}
              sx={(theme) => ({
                [theme.breakpoints.only('sm')]: {
                  marginBottom: 3,
                },
                [theme.breakpoints.only('md')]: {
                  marginBottom: 3,
                },
                [theme.breakpoints.only('lg')]: {
                  marginBottom: 3,
                },
                [theme.breakpoints.up('lg')]: {
                  marginBottom: 4,
                },
              })}

              // mb={4}
            >
              {' '}
              Osiedle "Zielone", Rąbień AB.
            </Typography>

            <Typography
              fontFamily="Cormorant"
              gutterBottom
              component="h2"
              variant="h2"
							ref={contentRef}
							color={contentInView ? theme.palette.primary.main : theme.palette.common.blue}
					
              sx={(theme) => ({
                textTransform: 'uppercase',

                [theme.breakpoints.only('sm')]: {
                  lineHeight: 1.3,
                },
                [theme.breakpoints.only('md')]: {
                  lineHeight: 1.3,
                },
                [theme.breakpoints.only('lg')]: {
                  lineHeight: 1.3,
                },
                [theme.breakpoints.up('lg')]: {
                  lineHeight: 1.4,
                },
              })}
              fontWeight={500}
              mb={4}
              lineHeight={1.4}
            >
              Wybudowaliśmy solidne domy, w pięknej okolicy.
            </Typography>
            <Typography
              gutterBottom
              component="p"
							variant="body1"
              mb={4}
						
              
            >
              {' '}
              Nasze nieruchomości zaprojektowaliśmy tak, aby dawały Tobie dużo
              przestrzeni i komfortu życiowego. Proste bryły niwelują utratę
              energii w zimie, a malownicza zielona okolica rekompensuję każdą
              chwilę zpędzoną w zgiełku miasta.
            </Typography>

            <LinkButtonContained
              disableRipple
              disableElevation
							ref={buttonRef}
              sx={{ borderRadius: '0.1em', backgroundColor: buttonInView ? theme.palette.primary.main : theme.palette.common.blue }}
              href="/domy-rabien-ab"
              children="Oferta"
						
            />
          </Box>
        </Box>
					
      ) : (
        <>
       
          <Box
            sx={{
              position: 'absolute',
              top: '0px',
              height: '90vh',
              width: 'auto',
              zIndex: 30,
            }}
          >
            {/* svg here */}
          </Box>
          <Box
            ref={imageRefMobile}
            style={{ height: match ? '90vh' : 'auto', overflow: 'hidden' }}
          >
            <Image
              style={
                {
                  // width: "100vw", height: "300px"
                }
              }
              src="/IMG-20220629-WA0007.jpg"
              layout={'responsive'}
              width={320}
              height={300}
              objectFit="cover"
            />
          </Box>
          <Container
            maxWidth="lg"
            sx={{
              top: '120px',
              marginTop: 4,
              marginBottom: 4,
              flexDirection: 'column',
              display: 'flex',
              height: match ? '300px' : 'auto',
            }}
          >
            <Typography gutterBottom component="h1" variant="body1" mb={2}>
              Osiedle "Zielone", Rąbień AB.
            </Typography>

            <Typography
              fontFamily="Cormorant"
              color={theme.palette.primary.main}
              gutterBottom
              component="h2"
              variant="h3"
              sx={{ textTransform: 'uppercase' }}
              fontWeight={500}
              mb={2}
              lineHeight={1.4}
            >
              Wybudowane z myślą o Twojej przyszłości.
            </Typography>
            <Typography
              gutterBottom
              component="p"
              mb={4}
              color={theme.palette.text.primary}
            >
              {' '}
              Nasze nieruchomości zaprojektowaliśmy tak, aby dawały ci dużo
              przestrzeni i komfortu życiowego. Proste bryły niwelują utratę
              energii w zimie, a malownicza zielona okolica rekompensuję każdą
              chwilę zpędzoną w zgiełku miasta.
            </Typography>

            <LinkButtonContained
              disableRipple
              disableElevation
              sx={{
                width: "100%", 
                borderRadius: '0.1em',
              }}
              href="/domy-rabien-ab"
              children="Oferta"
            />
          </Container>
        </>
      )}
    </Box>
		<Divider sx={{ marginBottom: .5, marginTop:.5 }} />
		</>
  )
}

export default HeaderComponent
      {/* <svg
              style={{
                zIndex: 4000,
                position: 'absolute',
                top: 114,
                transition:
                  !imageinView &&
                  theme.transitions.create(['height'], {
                    duration: theme.transitions.duration.standard,
                    easing: theme.transitions.easing.easeInOut,
                  }),
              }}
              preserveAspectRatio="none"
              width={svgWidth}
              height={svgHeight - 114}
              viewBox="0 0 804 847"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55.7079 267.794L54 266.082V268.5V846H1V114.388L352.298 460.213L353 460.904L353.702 460.212L397.345 417.212L397.352 417.206L397.359 417.199L802.5 2.45477V93.5897L750.499 146.298L434.788 466.298L436.212 467.702L750.21 149.437V791.5H668.5V372.5V370.359L666.858 371.733L602.358 425.733L602 426.033V426.5V791.5H513.5V615V614.575L513.195 614.281L354.195 460.781L352.805 462.219L511.5 615.425V792.5V793.5H512.5H603H604V792.5V426.967L666.5 374.641V792.5V793.5H667.5H751.21H752.21V792.5V147.41L802.5 96.4374V846H446.5V644.5V644.059L446.174 643.761L361.174 566.261L359.5 564.735V567V846H137V485.633L206.5 543.469V792.5V793.5H207.5H292.5H293.5V792.5V506.5V506.086L293.208 505.794L55.7079 267.794ZM56 846V270.918L291.5 506.914V791.5H208.5V543V542.531L208.14 542.231L136.64 482.731L135 481.367V483.5V846H56ZM444.5 644.942V846H361.5V569.265L444.5 644.942Z"
                fill={theme.palette.background.default}
                stroke="black"
                strokeWidth="12px"
                strokeOpacity={0}
                // opacity={imageinView ? 0.3 : 1}
                opacity={0.3}
              />
            </svg> */}


						       {/* <svg
              preserveAspectRatio="none"
              width={svgWidthMobile * 0.5}
              height={svgHeightMobile}
              viewBox="0 0 506 735"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55.7079 267.794L54 266.082V268.5V846H1V114.388L352.298 460.213L353 460.904L353.702 460.212L397.345 417.212L397.352 417.206L397.359 417.199L802.5 2.45477V93.5897L750.499 146.298L434.788 466.298L436.212 467.702L750.21 149.437V791.5H668.5V372.5V370.359L666.858 371.733L602.358 425.733L602 426.033V426.5V791.5H513.5V615V614.575L513.195 614.281L354.195 460.781L352.805 462.219L511.5 615.425V792.5V793.5H512.5H603H604V792.5V426.967L666.5 374.641V792.5V793.5H667.5H751.21H752.21V792.5V147.41L802.5 96.4374V846H446.5V644.5V644.059L446.174 643.761L361.174 566.261L359.5 564.735V567V846H137V485.633L206.5 543.469V792.5V793.5H207.5H292.5H293.5V792.5V506.5V506.086L293.208 505.794L55.7079 267.794ZM56 846V270.918L291.5 506.914V791.5H208.5V543V542.531L208.14 542.231L136.64 482.731L135 481.367V483.5V846H56ZM444.5 644.942V846H361.5V569.265L444.5 644.942Z"
                fill={theme.palette.background.default}
                stroke="black"
                strokeWidth="12px"
                strokeOpacity={0}
                opacity={0.5}
              />
            </svg> */}