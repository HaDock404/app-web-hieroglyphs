import React, { useEffect, useRef, useState } from 'react';
import '../styles/intro_search.css';

import Icon3 from './Icon3.jsx';

function IntroSearch() {
    const introSearchRef = useRef(null);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (introSearchRef.current) {
                if (window.scrollY >= 200) {
                    setIsFixed(true);
                } else if (window.scrollY < 200) {
                    setIsFixed(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="intro_search"
        ref={introSearchRef}
        style={{
            position: isFixed ? 'fixed' : 'relative',
            top: isFixed ? '-200px' : 'auto',

            zIndex: 5,
        }}
        >
            <article id="intro_search_part1">
                <div id="intro_search_part1A">
                    <div id="intro_search_part1A_el1">
                        Need icons for your website? Choose from hundreds of free icons the ones that suit you.
                    </div>
                    <div id="intro_search_part1A_el2">
                        Easy to use, easy to customize, make your life easier.
                    </div>
                </div>

                <div
                    id="intro_search_part1B"
                    ref={introSearchRef}
                    style={{
                        position: isFixed ? 'fixed' : 'relative',
                        top: isFixed ? '90px' : 'auto',
                        width: '570px',
                        zIndex: 5,
                    }}
                >
                    <div id="intro_search_part1B_el1">
                        <div>Regular</div>
                        <div>▼</div>
                    </div>
                    <input id="intro_search_part1B_el2" type="text" placeholder="Search for icons" />
                    <div id="intro_search_part1B_el3">
                        <Icon3 />
                    </div>
                </div>
            </article>

            <article id="intro_search_part2"></article>
        </section>
    );
}

export default IntroSearch;
