import { SvgLayer } from '@footer/.';
import { Box, Container, Divider, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from "next/image";
import { useRef, useState } from 'react';
import SvgQuote from 'src/UI/Quote';
import SwiperCore, { Autoplay, EffectFade, Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import content from "../../../../../data";

type Props = {}




const TestimoniesComponent = (props: Props) => {
    const contentRef = useRef<SwiperCore>() as any;
    const [swiper, setSwiper] = useState<SwiperCore>();
    const [currentSlide, setCurrentSlide] = useState(1)
    const theme = useTheme()
	const match = useMediaQuery(theme.breakpoints.up('md'))
    const printCurrentSlide = (swiper: SwiperCore) => {
        setCurrentSlide(swiper.realIndex + 1)
    }


    return (
        <Container >
			<Box sx={{display: "flex", flexDirection: match ? "row" : "column"}}>

            <Box mb={8} sx={{width: match ? " 50%" : "100%"}}>


	
                <Swiper
                    onSwiper={setSwiper}
                    onSlideChange={printCurrentSlide}
										centeredSlides={match ? true : false}
                    slidesPerView={1}
                    spaceBetween={30}
                    fadeEffect={{ crossFade: true }}
                    effect={"fade"}
                    autoplay={{
                        delay: 5000
                    }}
                    modules={[Navigation, EffectFade, Autoplay]}
                    loop={true}
                    className="mySwiper"
                    onInit={(core: SwiperCore) => {
                        contentRef.current = core.el
                    }}
                >

                    {content.testimonies.map((_) =>

                        <SwiperSlide key={_.image}>
                            <Box mt={8} mx={1} display="flex">
                                <Paper elevation={0} sx={{
                                    height: match ? 200 : 300, background: theme.palette.background.default, display: "flex",

																
                                    position: "relative",




                                    margin: "0",
                                    border: `solid 2px ${theme.palette.primary.main}`,

                                    borderRadius: "20px",
                                    padding: theme.spacing(3),
                                    "&:after": {
                                        "content": "\"\"",
                                        "position": "absolute",
                                        border: `solid 2px ${theme.palette.primary.main}`,
                                        "borderRadius": "0 50px 0 0",
                                        "width": "60px",
                                        "height": "60px",
                                        "bottom": "-62px",
                                        "left": "50px",
                                        "borderBottom": "none",
                                        "borderRight": "none",
                                        "borderLeft": "none",
                                        "zIndex": "3"
                                    }, "&:before": {
                                        "content": "\"\"",
                                        "position": "absolute",
                                        "width": "80px",
                                        "border": `6px solid ${theme.palette.background.default}`,
                                        "bottom": "-3px",
                                        "left": "50px",
                                        "zIndex": "2"
                                    }
                                }} >

                                    <Typography fontSize={match ? "1.5em" : "1.3em"} component="em" lineHeight={2.4} sx={{ alignSelf: "center"}}>
                                        <span >  <SvgQuote fill={theme.palette.primary.main} />
                                            <SvgQuote fill={theme.palette.primary.main} /></span>   {_.content}
                                        <span style={{ position: "absolute", marginLeft: theme.spacing(2) }}>  <SvgQuote fill={theme.palette.primary.main} />
                                            <SvgQuote fill={theme.palette.primary.main} /></span>
                                    </Typography>
                                </Paper>
                            </Box>


                            <Box display="flex" alignItems="center" pt={4}>

                                <Box sx={{ width: 80, height: 80, borderRadius: "50%", overflow: "hidden" }} alignItems="center" mx={2}>

                                    <Image src={_.image} width={80} height={80} layout="fixed"
                                    />

                                </Box>
                                <Typography color={theme.palette.primary.main} component="p">

                                    {_.name}
                                </Typography>

                            </Box>
                        </SwiperSlide>)
                    }

                </Swiper>
								</Box>
<Box sx={{width: match ? "50%" : "100%", alignSelf: "center"}}>

<SvgLayer/>

</Box>

            </Box>

									

            <Divider sx={{ marginBottom: .5 }} />

        </Container>
    )
}

export default TestimoniesComponent

