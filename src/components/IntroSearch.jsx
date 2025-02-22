import React, { useEffect, useRef, useState } from 'react';
import '../styles/intro_search.css';
import Icon3 from './Icon3.jsx';
import video from '../assets/videos/video.mp4'

function IntroSearch({ search, onSearchChange }) {
    const introSearchRef = useRef(null);
    const introSearchPart1BRef = useRef(null);
    const [isFixed, setIsFixed] = useState(false);
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(() => window.innerWidth < 739);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 739);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = window.innerWidth > 739 ? 200 : 529;

            if (introSearchRef.current) {
                if (window.scrollY >= scrollThreshold) {
                    setIsDisplayed(true);
                    setIsFixed(true);
                    console.log("top")
                } else if (window.scrollY < scrollThreshold){
                    setIsDisplayed(false);
                    setIsFixed(false);
                    
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isSmallScreen]);

    const [inputValue, setInputValue] = useState(search);
    const handleSearch = () => {
        onSearchChange(inputValue);
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <section
            id="intro_search"
            ref={introSearchRef}
            style={{
                position: isFixed ? 'fixed' : 'relative',
                top: isFixed ? (isSmallScreen ? '-530px' : '-200px') : 'auto',
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
                    ref={introSearchPart1BRef}
                    style={{
                        position: isFixed ? 'fixed' : 'relative',
                        top: isFixed ? '88px' : 'auto',
                    }}
                >
                    <div id="intro_search_part1B_el1">
                        <div>Regular</div>
                        <div>▼</div>
                    </div>
                    <input 
                        id="intro_search_part1B_el2" 
                        type="text" 
                        placeholder="Search for icons"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyPress}
                    />
                    <button 
                        id="intro_search_part1B_el3"
                        onClick={handleSearch}
                    >
                        <Icon3 />
                    </button>
                </div>
            </article>

            <article 
                id="intro_search_part2"
                style={{
                    display: isDisplayed ? "none" : "block"
                }}
            >
                <video src={video} autoPlay loop muted playsInline preload="auto" />
            </article>
        </section>
    );
}

export default IntroSearch;
