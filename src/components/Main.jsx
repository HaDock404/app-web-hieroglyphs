import React, { useEffect, useRef, useState } from 'react';
import '../styles/main.css'
import Icon1 from './Icon4.jsx'
import { MinusCircle,
        ArrowBendDownLeft, 
        ArrowBendDownRight,
        ArrowBendLeftDown,
        ArrowBendLeftUp,
        ArrowBendRightDown,
        ArrowBendRightUp,
        ArrowBendUpLeft,
        ArrowBendUpRight,
        ArrowCircleDown,
        ArrowCircleDownLeft,
        ArrowCircleDownRight,
        ArrowCircleLeft,
        ArrowCircleRight,
        ArrowCircleUpLeft,
        ArrowCircleUpRight
    } from '@hieroglyphs.io/react';

function MainX() {
    const mainRef = useRef(null);
    const [isUp, setIsUp] = useState(false);
    const [isSmallMain, setIsSmallMain] = useState(window.innerWidth < 739);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallMain(window.innerWidth < 739);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = window.innerWidth > 739 ? 200 : 529;

            if (mainRef.current) {

                if (window.scrollY >= scrollThreshold) {
                    setIsUp(true);
                } else if (window.scrollY < scrollThreshold) {
                    setIsUp(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isSmallMain]);

    return (
        <section 
            id="main"
            ref={mainRef}
            style={{
                marginTop: isUp ? (isSmallMain ? '710px' : '380px') : '0px'
        }}
        >
            <section id='container-box'>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <MinusCircle color='#656461'/>
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <ArrowBendDownLeft color='#656461'/>
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <ArrowBendDownRight color='#656461'/>
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <ArrowBendLeftDown color='#656461'/>
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <ArrowBendLeftUp color='#656461'/>
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <ArrowBendRightDown color='#656461'/>
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <ArrowBendRightUp color='#656461'/>
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <ArrowBendUpLeft color='#656461'/>
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <ArrowBendUpRight color='#656461'/>
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <ArrowCircleDown color='#656461'/>
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <ArrowCircleDownLeft color='#656461'/>
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <ArrowCircleDownRight color='#656461'/>
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <ArrowCircleLeft color='#656461'/>
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <ArrowCircleRight color='#656461'/>
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <ArrowCircleUpLeft color='#656461'/>
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <ArrowCircleUpRight color='#656461'/>
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <Icon1 />
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <Icon1 />
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <Icon1 />
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <Icon1 />
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <Icon1 />
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <Icon1 />
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <Icon1 />
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
                <div className='box-main'>
                    <div className='box-main-el1'>
                        <Icon1 />
                    </div>
                    <div className='box-main-el2'>
                        magnifying-glass
                    </div>
                </div>
            </section>
        </section>
    )
}

export default MainX