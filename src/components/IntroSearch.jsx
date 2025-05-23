import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/intro_search.css';
import Icon3 from './Icon3.jsx';
import video from '../assets/videos/video.mp4'

function IntroSearch({ search, onSearchChange }) {
    const navigate = useNavigate();
    const location = useLocation();
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

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        navigate(`/${selectedValue.toLowerCase()}`);
    };
    
      // Déterminer quelle option est active selon l'URL
    const currentPath = location.pathname.split('/')[1];

    const getPlaceholder = () => {
        if (currentPath === 'stickers') return 'Search for stickers';
        if (currentPath === 'animated') return 'Search for animated icons';
        return 'Search for icons'; // par défaut
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
                    <select 
                        id="intro_search_part1B_el1"
                        value={currentPath}
                        onChange={handleChange}
                        >
                        <option value="">Icons</option>
                        <option value="stickers">Stickers</option>
                        <option value="animated">Animated</option>
                    </select>
                    <input 
                        id="intro_search_part1B_el2" 
                        type="text" 
                        placeholder={getPlaceholder()}
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
