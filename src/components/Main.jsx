import React, { useEffect, useRef, useState } from 'react';
import '../styles/main.css'
import Icon1 from './Icon4.jsx'

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