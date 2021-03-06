import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container, IconButton, Skeleton, Stack, Typography } from '@mui/material';

import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/effect-cube";
import "swiper/css/effect-creative";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
import { EffectCube, Autoplay, EffectCreative, Navigation } from "swiper";

const CategorySlider = ({ data, delay, direction }) => {

    const [my_swiper, set_my_swiper] = useState({});
    const [my_swiper_status, set_my_swiper_status] = useState({
        isBeginning: true,
        isEnd: false
    });
    const btnStyle = {
        backgroundColor: 'black',
        boxShadow: '0 2px 5px 0 rgb(0 0 0 / 40%)',
        zIndex: '999'

    }
    return (
        <>
            <Swiper
                spaceBetween={50}
                modules={[EffectCreative, Autoplay, Navigation]}
                loop={true}
                autoplay={{
                    delay,
                    duration: 2400,
                    disableOnInteraction: false,
                }}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                slidesPerView={1}
                grabCursor={true}
                onSlideChange={(ev) => {
                    set_my_swiper(ev)

                    set_my_swiper_status({
                        isBeginning: ev.isBeginning,
                        isEnd: ev.isEnd,
                    })
                }}
                onInit={(ev) => {
                    set_my_swiper(ev)
                }}
            >
                {
                    data?.map((single, i) => <SwiperSlide key={i}>
                        <Image src={single.url} height={220} width={320} alt='d'></Image>

                    </SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default CategorySlider;