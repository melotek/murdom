import { Box, Container, Divider, Grid, Typography, useTheme, useMediaQuery } from '@mui/material'
import { Offers } from 'data'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import LogoBig from 'src/UI/LogoBig'
import SwiperCore, { Autoplay, EffectCoverflow, EffectFade, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
type Props = {
  data: Offers[]
}

const HeaderComponent = ({ data }: Props) => {
  const theme = useTheme()
  const router = useRouter()
  const match = useMediaQuery(theme.breakpoints.up('md'))

  const content = data[0]

	const contentRef = useRef<SwiperCore>() as any;
	const [swiper, setSwiper] = useState<SwiperCore>();
	const [currentSlide, setCurrentSlide] = useState(1)
	const printCurrentSlide = (swiper: SwiperCore) => {
			setCurrentSlide(swiper.realIndex + 1)
	}


  return (
    <>
      <Grid container xs={12} pt="114px">
        <Grid item xs={match ? 2 : 0} alignSelf="center">
          <Box width="35%" height="auto" display="flex" m="auto">
            <LogoBig />
          </Box>
        </Grid>
        <Grid item xs={match ? 8 : 12}>
          <Box pt={4} pb={4}>
            <Typography
              variant="h4"
              component="h1"
              letterSpacing={3}
              fontWeight={600}
              textAlign="center"
            >
              <span style={{ fontFamily: 'Cormorant' }}>Rąbień Ab &#8211;</span>
              <span
                style={{
                  fontFamily: 'Cormorant',
                  textTransform: 'uppercase',
                  color: theme.palette.primary.main,
                  marginRight: '5px',
                }}
              >
                {content.title}
              </span>
              <span style={{ fontFamily: 'Cormorant' }}>metrów</span>
            </Typography>
          </Box>
          <Box pb={4}>
            <Typography
              variant="body1"
              fontWeight={500}
              component="h2"
              textAlign="center"
            >
              Dom wolnostojący
            </Typography>
            <Box display="flex" justifyContent="space-evenly" my={3}>
              <Box display="flex">
                <Typography variant="body1" component="h3">
                  działka
                </Typography>
                <span style={{ marginLeft: 15, marginRight: 15 }}>&#8209;</span>
                <Typography variant="body1" component="h3">
                  {content.groundmeters} arów
                </Typography>
              </Box>
              <span style={{ marginLeft: 15, marginRight: 15 }}>&#8209;</span>

              {content.garage && (
                <Box display="flex">
                  <Typography variant="body1" component="h3">
                    garaż
                  </Typography>
                  <span style={{ marginLeft: 15, marginRight: 15 }}>
                    &#8209;
                  </span>
                  <Typography variant="body1" component="h3">
                    {content.carplacesDescription}
                  </Typography>
                </Box>
              )}
            </Box>


            <Box>
             <Swiper
      effect={"coverflow"}
			grabCursor={true}
			centeredSlides={true}
			slidesPerView={3}
			coverflowEffect={{
				rotate: 50,
				stretch: 0,
				depth: 80,
				modifier: 1,
				slideShadows: true,
			}}
			pagination={true}
			modules={[EffectCoverflow, Pagination, Autoplay]}
			className="mySwiper"
			autoplay={{
				delay: 5000,
			}}
			onSwiper={setSwiper}
			onSlideChange={printCurrentSlide}
			loop={true}
			onInit={(core: SwiperCore) => {
				contentRef.current = core.el
			}}


       
            >
							{content.otherImages.map((_: any) => 
						
              <SwiperSlide key={_}>
                  <Image
                    layout="responsive"
                    height={120}
                    width={160}
                    src={_}
                  />
              </SwiperSlide>
								)}
            </Swiper>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={match ? 2 : 0} alignSelf="center">
          <Box width="35%" height="auto" display="flex" m="auto">
            <LogoBig />
          </Box>
        </Grid>
      </Grid>

			
				<Container>
					<Box mb={4}>

			<Typography variant="body1" component="p">

{content.description}
			</Typography>
					</Box>
				</Container>

    </>
  )
}

export default HeaderComponent
