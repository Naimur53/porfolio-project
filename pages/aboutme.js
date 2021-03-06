import { Container } from '@mui/material';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useDispatch, } from 'react-redux';
import AboutBanner from '../src/Components/AboutPages/AboutBanner';
import AboutQuote from '../src/Components/AboutPages/AboutQuote';
import AboutTextArea from '../src/Components/AboutPages/AboutTextArea';
import Footer from '../src/Components/AboutPages/Footer';
import Middle from '../src/Components/AboutPages/Middle';
import MiddleVideo from '../src/Components/AboutPages/MiddleVideo';
import { addScrollValue, allData } from '../src/dataSlice/dataSlice';

const Aboutme = () => {
    const dispatch = useDispatch()
    const parallaxRef = useRef()


    useEffect(() => {
        if (!parallaxRef.current || !parallaxRef.current.container) return
        parallaxRef.current.container.current.onscroll = () => {
            dispatch(addScrollValue(parallaxRef.current.current / parallaxRef.current.space))
        }
        return () => {
            return dispatch(addScrollValue(0))
        }
    })

    return (
        <Parallax ref={parallaxRef} pages={7}>

            <ParallaxLayer
                offset={0}
                speed={.5}
                factor={1}
            >
                <Container className='h-screen'  >
                    <div className='h-full  flex items-center'>
                        <AboutBanner></AboutBanner>
                    </div>
                </Container>
            </ParallaxLayer>
            <ParallaxLayer
                offset={0}
                speed={.5}
                sticky={{ start: 0, end: 6 }}
                style={{
                    zIndex: -1
                }}
            >
                <Middle></Middle>
            </ParallaxLayer>
            <ParallaxLayer
                offset={0}
                speed={.5}
                sticky={{ start: 2.4, end: 3 }}
            >
                <MiddleVideo></MiddleVideo>
            </ParallaxLayer>
            <ParallaxLayer
                offset={1}
                speed={.5}
            >


                <AboutTextArea></AboutTextArea>
            </ParallaxLayer>
            <ParallaxLayer
                offset={5}
                speed={.5}
            >


                <AboutQuote></AboutQuote>
            </ParallaxLayer>
            <ParallaxLayer
                offset={6}
                speed={.5}
                factor={.5}
            >

                <Container>

                    <Footer></Footer>
                </Container>
            </ParallaxLayer>



        </Parallax>
    );
};

export default Aboutme;