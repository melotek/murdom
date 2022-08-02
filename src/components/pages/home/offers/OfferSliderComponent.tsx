import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import "swiper/css/effect-fade";
import {filter} from "lodash";

import Image from "next/image"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Container, Divider, Icon, IconButton, Typography, useTheme } from '@mui/material';
import content from "../../../../../data"
import SlideContentComponent from './SlideContentComponent';
import SvgBedroom from 'src/UI/Bedroom';
import SvgBathroom from 'src/UI/Bathroom';
import SvgGarage from 'src/UI/Garage';

type Props = {}

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
        setCurrentSlide(swiper.realIndex + 1)
    }
    const numOfRooms = content.offers[currentSlide].rooms;
    const numOfBathRooms = content.offers[currentSlide].bathrooms;
    const numOfCarPlaces =content.offers[currentSlide].carplaces;
    // <RowComponent theme={theme} icon={<SvgBedroom/>} title="Pokoje:" value={rooms} />
    // <RowComponent theme={theme} icon={<SvgBathroom/>}  title="Łazienki:" value={washroom} />
    // <RowComponent theme={theme}  icon={<SvgGarage/>} title="Miejsca postojowe w garażu:" />
    console.log(numOfCarPlaces)
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
                                <IconButton disableFocusRipple disableRipple size="large" aria-label="go-to-prev-slide" onClick={handlePrev}>
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
                        loop={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >

                        <SwiperSlide><Image layout='responsive' width={170} height={110} src="/IMG-20220629-WA0004.jpg" />
                        <Box>

                  
                        <Box display="flex"  alignItems="center">
                        <Icon sx={{width: "2em", height: "auto", marginRight: 1}}  >
                        <SvgBedroom/>
            </Icon>
        
                        
<Typography color={theme.palette.primary.main} variant="h5" component="caption"> &#10006; {numOfRooms}</Typography>
       

                        </Box>      
                        <Box display="flex"  alignItems="center">
                        <Icon sx={{width: "2em", height: "auto", marginRight: 1}}  >
                        <SvgBathroom/>
            </Icon>
        
                        
<Typography color={theme.palette.primary.main} variant="h5" component="caption"> &#10006; {numOfBathRooms}</Typography>
       

                        </Box>      
                        <Box display="flex"  alignItems="center">
                        <Icon sx={{width: "2em", height: "auto", marginRight: 1}}  >
                        <SvgGarage/>
            </Icon>
        
                        
<Typography color={theme.palette.primary.main} variant="h5" component="caption"> &#10006; {numOfCarPlaces}</Typography>
       

                        </Box>      
                        
                        </Box>


                        </SwiperSlide>
                        <SwiperSlide><Image layout='responsive' width={170} height={110} src="/IMG-20220629-WA0017.jpg" />
                        </SwiperSlide>
                        <SwiperSlide><Image layout='responsive' width={170} height={110} src="/IMG-20220629-WA0026.jpg" />
                        </SwiperSlide>
                        <SwiperSlide><Image layout='responsive' width={170} height={110} src="/IMG-20220629-WA0028.jpg" />
                        </SwiperSlide>
                    </Swiper>
                    <Divider sx={{ marginBottom: .5, marginTop: .5 }} />
                    <Swiper
                        onSwiper={setContentSwiper}
                        slidesPerView={1}
                        spaceBetween={30}
                        effect={"fade"}

                        modules={[Navigation, EffectFade]}
                        loop={true}
                        // modules={[EffectFade]}
                        className="mySwiper"
                        onInit={(core: SwiperCore) => {
                            contentRef.current = core.el
                        }}

                    >




                        {offers.map((_) =>
                        (
                            <SwiperSlide >

                                <SlideContentComponent offers={_ as any} />


                            </SwiperSlide>
                        )
                        )}

                    </Swiper>
                </div>
            </Box>
        </Container>
    )
}

export default OfferSliderComponent

