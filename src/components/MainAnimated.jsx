import React, { useEffect, useRef, useState } from 'react';
import '../styles/main_stickers.css'
import video from '../assets/videos/video.mp4'

function MainAnimated({ items }) {
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
      <>
        <section
          id="main-stickers"
          ref={mainRef}
          style={{
            marginTop: isUp ? (isSmallMain ? "710px" : "380px") : "0px",
          }}
        >
          <section id="container-box-stickers">
            {items.length > 0 ? (
              items.map(({ id, animated_name, animated_path }) => {
                const imagePath = animated_path;
                if (!imagePath) {
                  console.warn(`Composant introuvable pour : ${animated_path}`);
                  return null;
                }
  
                return (
                  <div
                    className="box-main-stickers"
                    key={id}
                    onClick={() => console.log("ok")}
                  >
                    <div className="box-main-el1-stickers">
                      <video src={animated_path} autoPlay loop muted playsInline preload="auto" />
                    </div>
                    <div className="box-main-el2-stickers">{animated_name}</div>
                  </div>
                );
              })
            ) : (
              <div
                style={{
                  padding: "20px",
                  textAlign: "center",
                  color: "#888",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                No result.
              </div>
            )}
          </section>
        </section>
      </>
    );
      
}

export default MainAnimated