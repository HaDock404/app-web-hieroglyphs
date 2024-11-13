import React, { useEffect, useRef, useState } from 'react';
import '../styles/main.css'

function Main() {
    const mainRef = useRef(null);
    const [isUp, setIsUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (mainRef.current) {

                if (window.scrollY >= 200) {
                    setIsUp(true);
                } else if (window.scrollY < 200) {
                    setIsUp(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section 
            id="main"
            ref={mainRef}
            style={{
                marginTop: isUp ? '380px' : '0px'
        }}
        >
            hello
        </section>
    )
}

export default Main