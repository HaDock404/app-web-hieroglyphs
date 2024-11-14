import React, { useEffect, useRef, useState } from 'react';
import '../styles/main.css'
import Icon1 from './Icon3.jsx'

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
            id="mainX"
            ref={mainRef}
            style={{
                marginTop: isUp ? (isSmallMain ? '710px' : '380px') : '0px'
        }}
        >
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
            hello
            <br/>
        </section>
    )
}

export default MainX