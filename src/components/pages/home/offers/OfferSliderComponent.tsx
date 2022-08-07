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
  Grid,
  Icon,
  IconButton,
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
import SlideContentComponent from './SlideContentComponent'

type Props = {}

function MobileOffers({ offers }: any) {
  const theme = useTheme()

  const imageRef = useRef<any | null>(null!)
  const [ContentinView, setContentInView] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (
      (ref.current?.firstChild?.firstChild as HTMLImageElement | undefined)
        ?.complete
    ) {
      setLoaded(true)
    }
  }, [])
  const ContentIsInView = () => {
    if (!ref.current) {
      return
    } else {
      const rect = ref.current.getBoundingClientRect()
      return (
        rect.top - rect.height / 2 <= rect.height &&
        rect.bottom >= rect.height / 2
      )
    }
  }

  const ContentscrollHandler = () => {
    setContentInView(ContentIsInView())
  }

  useEffect(() => {
    setContentInView(ContentIsInView())

    window.addEventListener('scroll', ContentscrollHandler)
    return () => {
      window.removeEventListener('scroll', ContentscrollHandler)
    }
  }, [])

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={0} columnSpacing={0}>
        {offers.map((_: any, index: any) => {
          return (
            <Grid item xs={6} sx={{ position: 'relative' }}>
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                height="100%"
                sx={{ position: 'absolute', zIndex: 1000 }}
              >
                <Grid xs={5} item>
                  <Typography
                    fontFamily="Cormorant"
                    variant="h1"
                    component="h3"
                    alignSelf="center"
                    color="white"
                    sx={{ fontStyle: 'italic' }}
                  >
                    0{index + 1}
                  </Typography>
                </Grid>
                <Grid pb={2} xs={1} item>
                  <Typography
                    fontFamily="Cormorant"
                    variant="h3"
                    component="h4"
                    alignSelf="center"
                    color="white"
                    sx={{ fontStyle: 'italic' }}
                  >
                    {_.title} metrów.
                  </Typography>
                </Grid>
                <Grid xs={3} item container>
                  <Grid item xs={4} display="flex" justifyContent={'center'}>
                    <Icon
                      sx={{
                        width: '3em',
                        height: '3em',
                        padding: 0.5,
                        lineHeight: '1em',
                      }}
                    >
                      <SvgBedroom color={theme.palette.common.white} />
                    </Icon>
                    <Typography
                      fontFamily="Cormorant"
                      variant="h4"
                      alignSelf="center"
                      component="h4"
                      color="white"
                      sx={{ fontStyle: 'italic' }}
                      mx={2}
                    >
                      &#10006;
                    </Typography>
                    <Typography
                      fontFamily="Cormorant"
                      variant="h2"
                      component="h4"
                      color="white"
                      sx={{ fontStyle: 'italic' }}
                    >
                      {_.rooms}
                    </Typography>
                  </Grid>
                  <Grid item xs={2} display="flex" justifyContent={'center'}>
                    <Icon
                      sx={{
                        width: '3em',
                        height: '3em',
                        padding: 0.5,
                        lineHeight: '1em',
                      }}
                    >
                      <SvgBathroom color={theme.palette.common.white} />{' '}
                    </Icon>
                    <Typography
                      fontFamily="Cormorant"
                      variant="h4"
                      alignSelf="center"
                      component="h4"
                      color="white"
                      sx={{ fontStyle: 'italic' }}
                      mx={2}
                    >
                      &#10006;
                    </Typography>
                    <Typography
                      fontFamily="Cormorant"
                      variant="h2"
                      alignSelf="center"
                      component="h4"
                      color="white"
                      sx={{ fontStyle: 'italic' }}
                    >
                      {_.bathrooms}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} display="flex" justifyContent={'center'}>
                    <Icon
                      sx={{
                        width: '3em',
                        height: '3em',
                        padding: 0.5,
                        lineHeight: '1em',
                      }}
                    >
                      <SvgGarage color={theme.palette.common.white} />
                    </Icon>
                    <Typography
                      fontFamily="Cormorant"
                      variant="h4"
                      alignSelf="center"
                      component="h4"
                      color="white"
                      sx={{ fontStyle: 'italic' }}
                      mx={1.32}
                    >
                      &#10006;
                    </Typography>
                    <Typography
                      fontFamily="Cormorant"
                      variant="h2"
                      alignSelf="center"
                      component="h4"
                      color="white"
                      sx={{ fontStyle: 'italic' }}
                    >
                      {_.carplaces}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <div ref={ref}>
                <Image
                  style={{
                    position: 'absolute',
                    zIndex: 100,
                    '&:hover': {
                      filter: 'brightness(1)',
                    },
                    filter: !ContentinView
                      ? 'saturate(60%) brightness(1)'
                      : 'saturate(100%) brightness(0.8)',
                  }}
                  src={_.image}
                  layout="responsive"
                  width={320}
                  height={240}
                ></Image>
              </div>
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
        <Icon sx={{ width: '2em', height: '2em', padding: 1 }}>
          <SvgBedroom color={theme.palette.common.white} />
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
        <Icon sx={{ width: '2em', height: '2em', padding: 1 }}>
          <SvgBathroom color={theme.palette.common.white} />
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
          <SvgGarage color={theme.palette.common.white} />
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

  return (
    <Container>
      {match ? (
        <>
          <MobileOffers offers={offers} />
        </>
      ) : (
        <>
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
