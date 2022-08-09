import { useEffect, useRef, useState } from 'react'
import SwiperCore, { Autoplay, EffectFade, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import {
  Box,
  Container,
  Divider,
  Fade,
  Grid,
  Icon,
  IconButton,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Image from 'next/image'
import { LinkButtonContained } from 'src/components/shared/buttons/'
import SvgBathroom from 'src/UI/Bathroom'
import SvgBedroom from 'src/UI/Bedroom'
import SvgGarage from 'src/UI/Garage'
import content from '../../../../../data'
import SlideContentComponent, { RowIconsComponent } from './SlideContentComponent'
import React from 'react'
import { delay } from 'lodash'
import { ArrowRight } from 'src/UI/ArrowRight'

type Props = {}

function MobileOffers({ offers }: any) {
  const theme = useTheme()
	const [active, setActive] = useState<number>(-1)


	const containerRef = useRef(null)

	



  return (
    <Box sx={{ width: '100%'}}>
      <Grid container rowSpacing={0} columnSpacing={0} component="ul" sx={{padding: 0 }}>
        {offers.map((_: any, index: number) => {
          return (
            <Grid component="li" xs={6} sx={{ position: 'relative', }}
					
						onMouseOver={		() => setActive(index)}
						onMouseLeave={	() =>	setActive(-1)}
						>
              <Grid
								ref={containerRef}
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                height="100%"
								xs={12}
                sx={{ position: 'absolute', zIndex: 1000, cursor: "pointer" }}
              >
                <Grid  xs={1} item>
                  <Typography
                    fontFamily="Cormorant"
                    variant="h1"
                    component="h3"
                    alignSelf="center"
                    
										color={active > -1 && index === active ? theme.palette.common.blue : "white"}
                    sx={{ fontStyle: 'italic', transform: "scaleY(1.35)",	transition: "color .2s ease-in" }}
                  >
                    0{index + 1}
                  </Typography>
                </Grid>
                <Grid sx={{display: "flex", 			transitionProperty: "all",
								transitionTimingFunction:"ease-in",
								transitionDuration: ".2s",}}  
								xs={active > -1 && index === active ? 2 : 4} item>
                  <Typography
                    fontFamily="Cormorant"
                    variant="h3"
                    component="h4"
										fontWeight={900}
										// fontWeight={active > -1 && index === active ? 700 : 700}
                    alignSelf="center"
										color={active > -1 && index === active ? theme.palette.common.blue : "white"}
                    sx={{ fontStyle: 'italic',	transform: "scaleY(1.35)",	transition: "color .2s ease-in" }}
                  >
                    {_.title} metrów.
                  </Typography>
                </Grid>
                <Grid xs={active > -1 && index === active ? 2 : 1} sx={{
								
								transitionProperty: "all",
								transitionTimingFunction:"ease-in",
								transitionDuration: ".2s",
								
								transitionDelay: "15s", display: "flex" }} item container>
								<RowIconsComponent
								index={index}
								_={_}
								fontColor={active > -1 && index === active ? theme.palette.common.blue : "white"}
								SvgBedroom={<SvgBedroom
								
									color={
										
										
										active > -1 && index === active ? theme.palette.common.blue : "white"} />}  SvgBathroom={<SvgBathroom color={active > -1 && index === active ? theme.palette.common.blue : "white"} />} SvgGarage={<SvgGarage color={active > -1 && index === active ? theme.palette.common.blue : "white"} />}
								/>
                </Grid>
								<Slide container={containerRef.current} in={active > -1 && index === active } direction="right" timeout={700}>

							 <Grid sx={{dispay: "flex", opacity: active > -1 && index === active ? 1 : 0, 			transitionProperty: "all",
								transitionTimingFunction:"ease-in",
								transitionDuration: ".2s", transitionDelay: ".5s"   }} xs={active > -1 && index === active ? 2 : 0}>
									<ArrowRight
									color={theme.palette.common.blue}
									
									/>
									
									</Grid> 
								</Slide>
              </Grid>
              <div >
                <Image
                  style={{
                    position: 'absolute',
                    zIndex: 100,
										transition: "all .725s ease-in-out",
										borderBottomLeftRadius: active > -1 && index === active ? "80px": 0,
										borderTopRightRadius: active > -1 && index === active ? "80px": 0,
										filter: active > -1 && index === active ? "brightness(1) opacity(60%)" : "brightness(.85) opacity(100%)"
                  
                  }}
                  src={_.image}
                  layout="responsive"
                  width={320}
                  height={260}
                ></Image>
              </div>
						{active > -1 && index === active ? <Grid>



						</Grid> : null}	
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

const SliderLegend = ({ numOfRooms, numOfBathRooms, numOfCarPlaces }: any) => {
  const theme = useTheme()
  const match = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Box display="flex" justifyContent="space-around">
      <Box display="flex" alignItems="center">
        <Icon sx={{ width: '2em', height: '2em', padding:1 }}>
          <SvgBedroom color={theme.palette.primary.main}/>
        </Icon>
        <Typography
          color={theme.palette.primary.main}
          variant="h5"
          component="h3"
        >
          {' '}
          &#10006; {numOfRooms}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Icon sx={{ width: '2em', height: '2em', padding:1 }}>
          <SvgBathroom color={theme.palette.primary.main} />
        </Icon>
        <Typography
          color={theme.palette.primary.main}
          variant="h5"
          component="h3"
        >
          {' '}
          &#10006; {numOfBathRooms}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Icon sx={{ width: '2em', height: '2em', padding: 1 }}>
          <SvgGarage color={theme.palette.primary.main} />
        </Icon>
        <Typography
          color={theme.palette.primary.main}
          variant="h5"
          component="h3"
        >
          {' '}
          &#10006; {numOfCarPlaces}
        </Typography>
      </Box>
    </Box>
  )
}

const OfferSliderComponent = (props: Props) => {
  const swiperRef = useRef<SwiperCore>() as any
  const contentRef = useRef<SwiperCore>() as any
  const [swiper, setSwiper] = useState<SwiperCore>()
  const [contentSwiper, setContentSwiper] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(1)
  const theme = useTheme()
  const { offers } = content
  const match = useMediaQuery(theme.breakpoints.up('md'))

  const links = [{ type: '1' }, { type: '2' }, { type: '3' }, { type: '4' }]
  const [link, setCurrentLink] = useState(offers[0].type)

  const [contentInView, setContentInView] = React.useState(true)

  const titleRef = React.useRef(null)


  const handleNext = () => {
    swiperRef!.current.swiper.slideNext()
    contentRef!.current.swiper.slideNext()
    setCurrentSlide(swiper.realIndex + 1)
  }

  const handlePrev = () => {
    swiperRef!.current.swiper.slidePrev()
    contentRef!.current.swiper.slidePrev()
  }
  const printCurrentSlide = (swiper: SwiperCore) => {
    setCurrentSlide(swiper.realIndex + 1)
    setCurrentLink(offers[swiper.realIndex].type)
  }


  const ContentIsInView = () => {
    if (!titleRef.current) {
      return
    } else {
      const rect = titleRef.current.getBoundingClientRect()
      return (
				rect.top - 600 <= rect.height && rect.bottom >= 300
      )
    }
  }

  const ContentScrollHandler = () => {
    setContentInView(ContentIsInView())
  
  }


	React.useEffect(() => {
    setContentInView(ContentIsInView())
    window.addEventListener('scroll', ContentScrollHandler)
    return () => {
      window.removeEventListener('scroll', ContentScrollHandler)
    }
  }, [contentInView])

  const [isFaded, setIsFaded]= useState(false)

useEffect(() => {
delay(()=> {setIsFaded(true)}, 2000)

}, [isFaded])


  return (
    <Container>
      {match ? (
        <>
				<Fade in={
	isFaded
					
					}
					timeout={400}
					>
				<Typography fontFamily="Cormorant" variant="h2"  ref={titleRef}
				color={ contentInView ? theme.palette.primary.main : theme.palette.common.blue} fontWeight={600} sx={{textAlign: "center", maxWidth: 600, display: "flex", marginLeft: "auto", marginRight: "auto", marginBottom: theme.spacing(12)}}>Porozmawiajmy o nieruchomościach</Typography>
					</Fade>
          <MobileOffers offers={offers} />
			
        </>
      ) : (
        <>
							<Fade in={
	isFaded
					
					}
					timeout={400}
					>
				<Typography my={4} fontFamily="Cormorant" variant="h2"  ref={titleRef}
				color={ contentInView ? theme.palette.primary.main : theme.palette.common.blue} fontWeight={600} sx={{textAlign: "center"}}>Porozmawiajmy o nieruchomościach</Typography>
					</Fade>
          <Box mb={8}>
            <div className="slider-wrapper">
              <Box
                sx={{ width: '100%', distply: 'flex', flexDirection: 'column' }}
              >
                <Divider sx={{ marginBottom: 0.5 }} />
                <Box display="flex" sx={{ justifyContent: 'space-between' }}>
                  {!match && (
                    <Box sx={{ alignSelf: 'center' }} display="flex">
                      <Typography
                        variant="body1"
                        color={theme.palette.primary.main}
                      >
                        {currentSlide}
                      </Typography>
                      <Typography
                        variant="body1"
                        color={theme.palette.primary.main}
                        sx={{ paddingLeft: 1, paddingRight: 1 }}
                      >
                        /
                      </Typography>
                      <Typography
                        variant="body1"
                        color={theme.palette.primary.main}
                      >
                        4
                      </Typography>
                    </Box>
                  )}
                  <Box sx={{ display: 'flex' }}>
                    <IconButton
                      sx={{ display: 'flex', alignItems: 'center' }}
                      disableFocusRipple
                      disableRipple
                      size="large"
                      aria-label="go-to-prev-slide"
                      onClick={handlePrev}
                    >
                      <NavigateBeforeIcon color="primary" />
                    </IconButton>
                    <IconButton
                      disableFocusRipple
                      disableRipple
                      size="large"
                      aria-label="go-to-next-slide"
                      onClick={handleNext}
                    >
                      <NavigateNextIcon color="primary" />
                    </IconButton>
                  </Box>
                </Box>
                <Divider sx={{ marginBottom: 0.5 }} />
              </Box>
              <Swiper
                onSwiper={setSwiper}
                slidesPerView={1}
                spaceBetween={0}
                onInit={(core: SwiperCore) => {
                  swiperRef.current = core.el
                  // "swiper.el" is what you want
                }}
                onSlideChange={printCurrentSlide}
                autoplay={{
                  delay: 4000,
                }}
                speed={1100}
                loop={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
              >
                {offers.map(
                  (_: {
                    image: string
                    bathrooms: number
                    carplaces: number
                    rooms: number
                  }) => (
                    <SwiperSlide key={_.image}>
                      <Image
                        layout="responsive"
                        width={170}
                        height={110}
                        src={_.image}
                      />
                      <Divider sx={{ marginBottom: 0.5, marginTop: 0.5 }} />
                      <SliderLegend
                        numOfBathRooms={_.bathrooms}
                        numOfCarPlaces={_.carplaces}
                        numOfRooms={_.rooms}
                      />
                    </SwiperSlide>
                  )
                )}
              </Swiper>
              <Divider sx={{ marginBottom: 0.5, marginTop: 0.5 }} />
              <Swiper
                onSwiper={setContentSwiper}
                slidesPerView={1}
                spaceBetween={30}
                effect={'fade'}
                speed={1100}
                autoplay={{
                  delay: 4000,
                }}
                modules={[Navigation, EffectFade, Autoplay]}
                loop={true}
                // modules={[EffectFade]}
                className="mySwiper"
                onInit={(core: SwiperCore) => {
                  contentRef.current = core.el
                }}
              >
                {offers.map((_) => (
                  <SwiperSlide key={_.image}>
                    <>
                      <SlideContentComponent offers={_ as any} />
                    </>
                  </SwiperSlide>
                ))}
              </Swiper>
              <LinkButtonContained
                disableRipple
                disableElevation
                sx={{ width: '100vw', borderRadius: '0.1em' }}
                href={`/domy/${link}`}
                children="nieruchomości"
                fullWidth={true}
              />
            </div>
          </Box>
          <Divider sx={{ marginBottom: 0.5 }} />
        </>
      )}
    </Container>
  )
}

export default OfferSliderComponent
