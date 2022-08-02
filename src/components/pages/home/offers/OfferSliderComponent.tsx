import { useRef, useState } from 'react';
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Container, Divider, Icon, IconButton, Typography, useTheme } from '@mui/material';
import Image from "next/image";
import { LinkButtonContained } from 'src/components/shared/buttons/';
import SvgBathroom from 'src/UI/Bathroom';
import SvgBedroom from 'src/UI/Bedroom';
import SvgGarage from 'src/UI/Garage';
import content from "../../../../../data";
import SlideContentComponent from './SlideContentComponent';

type Props = {}

const SliderLegend = ({ numOfRooms, numOfBathRooms, numOfCarPlaces }: any) => {
    const theme = useTheme()

    return (
        <Box display="flex" justifyContent="space-around">
            <Box display="flex" alignItems="center">
                <Icon sx={{ width: "2em", height: "2em", padding: 1 }}  >
                    <SvgBedroom />
                </Icon>
                <Typography color={theme.palette.primary.main} variant="h5" component="h3"> &#10006; {numOfRooms}</Typography>
            </Box>
            <Box display="flex" alignItems="center">
                <Icon sx={{ width: "2em", height: "2em", padding: 1 }}  >
                    <SvgBathroom />
                </Icon>
                <Typography color={theme.palette.primary.main} variant="h5" component="h3"> &#10006; {numOfBathRooms}</Typography>
            </Box>
            <Box display="flex" alignItems="center">
                <Icon sx={{ width: "2em", height: "2em", padding: 1 }}  >
                    <SvgGarage />
                </Icon>
                <Typography color={theme.palette.primary.main} variant="h5" component="h3"> &#10006; {numOfCarPlaces}</Typography>
            </Box>
        </Box>
    )
}


const OfferSliderComponent = (props: Props) => {
    const swiperRef = useRef<SwiperCore>() as any;
    const contentRef = useRef<SwiperCore>() as any;
    const [swiper, setSwiper] = useState(null);
    const [contentSwiper, setContentSwiper] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(1)
    const theme = useTheme()
    const { offers } = content

    const handleNext = () => {
        swiperRef!.current.swiper.slideNext()
        contentRef!.current.swiper.slideNext()
        setCurrentSlide(swiper.realIndex + 1)
    }

    const handlePrev = () => {
        swiperRef!.current.swiper.slidePrev()
        contentRef!.current.swiper.slidePrev()


    }
    const printCurrentSlide = (e: any) => {
        setCurrentSlide(e.realIndex + 1)
    }


    return (
        <Container>
            <Box mb={8}>
                <div className='slider-wrapper'>
                    <Box sx={{ width: '100%', distply: "flex", flexDirection: "column" }}>
                        <Divider sx={{ marginBottom: .5 }} />
                        <Box display="flex" sx={{ justifyContent: "space-between" }}>
                            <Box sx={{ alignSelf: "center" }} display="flex">
                                <Typography variant="body1" color={theme.palette.text.secondary} >
                                    {currentSlide}
                                </Typography>
                                <Typography variant="body1" color={theme.palette.text.secondary} sx={{ paddingLeft: 1, paddingRight: 1 }}>
                                    /
                                </Typography>
                                <Typography variant="body1" color={theme.palette.text.secondary} >
                                    4
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", }}>
                                <IconButton sx={{ display: "flex", alignItems: "center" }} disableFocusRipple disableRipple size="large" aria-label="go-to-prev-slide" onClick={handlePrev}>
                                    <NavigateBeforeIcon color="primary" />
                                </IconButton>
                                <IconButton disableFocusRipple disableRipple size="large" aria-label="go-to-next-slide" onClick={handleNext}>
                                    <NavigateNextIcon color="primary" />
                                </IconButton>
                            </Box>
                        </Box>
                        <Divider sx={{ marginBottom: .5 }} />
                    </Box>
                    <Swiper
                        onSwiper={setSwiper}
                        slidesPerView={1}
                        spaceBetween={20}

                        onInit={(core: SwiperCore) => {
                            swiperRef.current = core.el;
                            // "swiper.el" is what you want
                        }}
                        onSlideChange={printCurrentSlide}
                        autoplay={{
                            delay: 3000
                        }}
                        loop={true}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        {offers.map((_: { image: string, bathrooms: number, carplaces: number, rooms: number }) =>
                            <SwiperSlide key={_.image}><Image layout='responsive' width={170} height={110} src={_.image}

                            />
                                <Divider sx={{ marginBottom: .5, marginTop: .5 }} />
                                <SliderLegend numOfBathRooms={_.bathrooms} numOfCarPlaces={_.carplaces} numOfRooms={_.rooms} />
                            </SwiperSlide>
                        )}
                    </Swiper>
                    <Divider sx={{ marginBottom: .5, marginTop: .5 }} />
                    <Swiper
                        onSwiper={setContentSwiper}
                        slidesPerView={1}
                        spaceBetween={30}
                        effect={"fade"}
                        autoplay={{
                            delay: 3000
                        }}
                        modules={[Navigation, EffectFade, Autoplay]}
                        loop={true}
                        // modules={[EffectFade]}
                        className="mySwiper"
                        onInit={(core: SwiperCore) => {
                            contentRef.current = core.el
                        }}  >
                        {offers.map((_) =>
                        (
                            <SwiperSlide key={_.image}>
                                <>
                                    <SlideContentComponent offers={_ as any} />
                                </>
                            </SwiperSlide>
                        )
                        )}
                    </Swiper>
                    <LinkButtonContained disableRipple disableElevation sx={{ width: "100vw", borderRadius: "0.1em", }} href="/inwestycje" children="nieruchomości" fullWidth={true} />
                </div>
            </Box>
            <Divider sx={{ marginBottom: .5 }} />
        </Container>
    )
}

export default OfferSliderComponent

function useCallback(arg0: () => void, arg1: undefined[]) {
    throw new Error('Function not implemented.');
}

