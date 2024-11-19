import React, { useEffect, useRef, useState } from 'react';
import '../styles/main.css'

import * as Hieroglyphs from '@hieroglyphs.io/react'

function MainX({ items }) {
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
            marginTop: isUp ? (isSmallMain ? '710px' : '380px') : '0px',
          }}
        >
          <section id="container-box">
            {/* Vérifier si des éléments existent après le filtrage */}
            {items.length > 0 ? (
              items.map(({ id, plugin_component, plugin_name }) => {
                const Component = Hieroglyphs[plugin_component];
                if (!Component) {
                  console.warn(`Composant introuvable pour : ${plugin_component}`);
                  return null;
                }
      
                return (
                  <div className="box-main" key={id}>
                    <div className="box-main-el1">
                      <Component color="#656461" />
                    </div>
                    <div className="box-main-el2">{plugin_name}</div>
                  </div>
                );
              })
            ) : (
              <div style={{ padding: '20px', textAlign: 'center', color: '#888' }}>
                Aucun résultat trouvé
              </div>
            )}
          </section>
        </section>
      );
      
}

export default MainX