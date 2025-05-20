import React, { useEffect, useRef, useState } from 'react';
import '../styles/main.css'

function Main({ items }) {
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
          id="main"
          ref={mainRef}
          style={{
            marginTop: isUp ? (isSmallMain ? "710px" : "380px") : "0px",
          }}
        >
          <section id="container-box">
            {items.length > 0 ? (
              items.map(({ id, sticker_name, sticker_path }) => {
                const imagePath = sticker_path;
                if (!imagePath) {
                  console.warn(`Composant introuvable pour : ${sticker_path}`);
                  return null;
                }
  
                return (
                  <div
                    className="box-main"
                    key={id}
                    onClick={() => console.log("ok")}
                  >
                    <div className="box-main-el1">
                      <img
                        src={imagePath}
                        alt={sticker_name}
                        style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                      />
                    </div>
                    <div className="box-main-el2">{sticker_name}</div>
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

export default Main