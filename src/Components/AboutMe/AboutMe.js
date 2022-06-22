import { Grid, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';
import { AnimatePresence, motion } from 'framer-motion';
import HeadingText from './HeadingText';
import MiddleContent from './MiddleContent';
import RightContent from './RightContent';

const AboutMe = () => {
    const { scrollValue, homeCategory } = useSelector(allData)
    const [value, setValue] = useState({ content1: true, content2: false, content3: false, content4: false });

    const eleRef = useRef()
    const container = useRef()
    useEffect(() => {
        const currentValue = scrollValue.toFixed(1)
        console.log(currentValue);

        if (currentValue > 2.6) {
            // console.log();

        }
        else if (currentValue > 2.4) {
            setValue({ content1: false, content2: false, content3: false, content4: true })

        }
        else if (currentValue > 2.2) {

            setValue({ content1: false, content2: false, content3: true, content4: false })
        }
        else if (currentValue > 2) {
            setValue({ content1: false, content2: true, content3: false, content4: false })
        }
        else {
            setValue({ content1: true, content2: false, content3: false, content4: false })

        }
    }, [scrollValue])
    const handleMouseMove = e => {
        let x = e.clientX - container.current.getBoundingClientRect().left
        eleRef.current.style.left = ` ${x}px`;
        e.stopPropagation();
    }
    const mouseEnter = e => {
        let x = e.clientX - container.current.getBoundingClientRect().left
        eleRef.current.style.transition = `all .3s ease-out`;
        eleRef.current.style.left = ` ${x}px`;
        setTimeout(() => {
            eleRef.current.style.transition = `none`;

        }, 400)
        e.stopPropagation();
    }
    const mouseLeave = e => {
        eleRef.current.style.transition = `all .7s ease-out`;
        // eleRef.current.style.left = `100%`;
        e.stopPropagation();
    }
    return (
        <div ref={container} className=' py-14 relative  px-2 h-screen'>
            <Grid container spacing={4} className='h-full'>
                <Grid item md={6} xs={12} className='h-full'>
                    <div className='h-full flex items-center'>
                        <div>
                            <div className=' h-14 overflow-hidden'>

                                <HeadingText title='Nikon Photographer' isVisible={value.content1}></HeadingText>
                                <HeadingText title='Web designer' isVisible={value.content2}></HeadingText>
                                <HeadingText title='Film Maker' isVisible={value.content3}></HeadingText>
                                <HeadingText title='Curious  Traveler' isVisible={value.content4}></HeadingText>
                            </div>
                            <div className='h-28 mt-5 overflow-hidden'>
                                <MiddleContent
                                    isVisible={value.content1}
                                    text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nihil earum consectetur ipsum, nobis deserunt blanditiis dolorem? Obcaecati in accusantium facere blanditiis, praesentium ab maiores tempore nam amet ipsam explicabo.'


                                ></MiddleContent>
                                <MiddleContent
                                    isVisible={value.content2}
                                    text='hi arum consectetur ipsum, nobis deserunt blanditiis dolorem? Obcaecati in accusantium facere blanditiis, praesentium ab maiores tempore nam amet ipsam explicabo.'


                                ></MiddleContent>
                                <MiddleContent
                                    isVisible={value.content3}
                                    text='A filmmaker is in charge of making, leading, and developing movie productions. It is a career that allows an individual to use their leadership as well as creative thinking skills to lead and direct major motion pictures or made-for-television films.
                                    '
                                ></MiddleContent>
                                <MiddleContent
                                    isVisible={value.content4}
                                    text='Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip
                                    '
                                ></MiddleContent>

                            </div>



                            <div className='inline-block  text-xl border-b-2 border-yellow-300' >
                                watch Collection {"->"}
                            </div>
                        </div>

                    </div>
                </Grid>
                <Grid item md={6} xs={12} className='h-full'>
                    <div className='flex flex-col h-full  relative justify-center'>
                        <RightContent isVisible={value.content1} url='https://i.ibb.co/BtbKgFL/20190320-WEST-AFRICA-FROM-GUNJUR-TO-BASSE-2964-2.jpg'></RightContent>
                        <RightContent isVisible={value.content2} url='https://i.ibb.co/mFRGKVP/photo-1605379399642-870262d3d051-1.jpg'></RightContent>
                        <RightContent isVisible={value.content3} url='https://i.ibb.co/c3Q8XVV/20190320-SABATY-YAYA-BAYO-THE-DOCUMENTARY-008-1.jpg'></RightContent>
                        <RightContent isVisible={value.content4} url='https://i.ibb.co/ByV09Fk/20191118-MOROCCO-DESERT-108-1-2-1.jpg'></RightContent>
                    </div>

                </Grid>
            </Grid>
        </div>
    )

};

export default AboutMe;

// return (
//     <div ref={container} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onMouseMove={handleMouseMove} className=' py-14 relative  px-2'>
//         <Grid container spacing={2}>
//             {/* left  */}
//             <Grid item xs={6}>
//                 <div className='flex flex-col items-between justify-between h-'>
//                     <div className='h-40 overflow-hidden'>
//                         <HeadingText title1='Nikon' title2='Photographer' isVisible={value}></HeadingText>
//                     </div>
//                     <div >
//                         <MiddleContent
//                             isVisible={value}
//                             url='https://i.ibb.co/BtbKgFL/20190320-WEST-AFRICA-FROM-GUNJUR-TO-BASSE-2964-2.jpg'
//                             text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nihil earum consectetur ipsum, nobis deserunt blanditiis dolorem? Obcaecati in accusantium facere blanditiis, praesentium ab maiores tempore nam amet ipsam explicabo.'


//                         ></MiddleContent>
//                     </div>
//                 </div>
//             </Grid>
//             <Grid item xs={6}>
//                 {/* right  */}
//                 <div className='flex flex-col items-between justify-between h-full'>

//                     <MiddleContent
//                         isVisible={value}
//                         url='https://i.ibb.co/c3Q8XVV/20190320-SABATY-YAYA-BAYO-THE-DOCUMENTARY-008-1.jpg'
//                         text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nihil earum consectetur ipsum, nobis deserunt blanditiis dolorem? Obcaecati in accusantium facere blanditiis, praesentium ab maiores tempore nam amet ipsam explicabo.'
//                         right

//                     ></MiddleContent>
//                     <MiddleContent
//                         isVisible={!value}
//                         url='https://i.ibb.co/ByV09Fk/20191118-MOROCCO-DESERT-108-1-2-1.jpg'
//                         text='Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip'
//                         right

//                     ></MiddleContent>
//                     <div className='h-40 overflow-hidden'>
//                         <HeadingText title1='Film' title2='Maker' right isVisible={value}></HeadingText>
//                         <HeadingText title1='Curious ' title2='Traveler' right isVisible={!value}></HeadingText>
//                     </div>
//                 </div>
//             </Grid>

//         </Grid>




//         <div ref={eleRef} className='absolute about-overlay  bg-white'>

//         </div>
//     </div >
// );