import { Box, Container, Paper, Typography, useTheme } from '@mui/material';
import Image from "next/image";
import { useRef, useState } from 'react';
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

    const printCurrentSlide = (swiper) => {
        setCurrentSlide(swiper.realIndex + 1)
    }


    return (
        <Container>

            <Swiper
                onSwiper={setSwiper}
                onSlideChange={printCurrentSlide}

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
                        <Box mt={8} mx={2} display="flex">
                            <Paper elevation={0} sx={{ height: 150, background: theme.palette.background.default }} >
                                <Typography component="em" sx={{ alignSelf: "flex-end" }}>
                                    {_.content}

                                </Typography>
                            </Paper>
                        </Box>


                        <Box display="flex" alignItems="center">

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
        </Container>
    )
}

export default TestimoniesComponent