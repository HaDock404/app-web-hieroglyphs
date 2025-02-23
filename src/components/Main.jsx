import React, { useEffect, useRef, useState } from 'react';
import '../styles/main.css'

import Icon5 from './Icon5';

import * as Hieroglyphs from '@hieroglyphs.io/react'

function MainX({ items }) {
    const mainRef = useRef(null);
    const [isUp, setIsUp] = useState(false);
    const [isSmallMain, setIsSmallMain] = useState(window.innerWidth < 739);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlugin, setSelectedPlugin] = useState(null);

    const [selectedPluginX, setSelectedPluginX] = useState(null);

    const openModal = (plugin_name, plugin_component) => {
      setSelectedPlugin(plugin_name);
      setSelectedPluginX(plugin_component)
      setIsModalOpen(true);
    };

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

    const SelectedIcon = selectedPluginX ? Hieroglyphs[selectedPluginX] : null;

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
              items.map(({ id, plugin_component, plugin_name }) => {
                const Component = Hieroglyphs[plugin_component];
                if (!Component) {
                  console.warn(`Composant introuvable pour : ${plugin_component}`);
                  return null;
                }
  
                return (
                  <div
                    className="box-main"
                    key={id}
                    onClick={() => openModal(plugin_name, plugin_component)}
                  >
                    <div className="box-main-el1">
                      <Component color="#656461" />
                    </div>
                    <div className="box-main-el2">{plugin_name}</div>
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
  
        {/* Modale */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className='modal-placement'>

                <div className='modal-placement-el1'>
                  <div className='modal-placement-el1-box1'>
                    <div className='modal-placement-el1-box1-icon'>
                      {SelectedIcon ? (
                      <div className="icon-container">
                        <SelectedIcon color="#024f29" />
                      </div>
                        ) : (
                      <p>/error</p>
                    )}
                    </div>
                    <div className='modal-placement-el1-box1-name'>
                      {selectedPlugin}
                    </div>
                  </div>
                  <div className='modal-placement-el1-box2'>
                    available in V1.0+ <br/>
                    U+EB14
                  </div>
                </div>
                <div className='modal-placement-el2'>

                </div>
                <button className='modal-button' onClick={() => setIsModalOpen(false)}>
                  <Icon5 />
                </button>
              </div>

            </div>
          </div>
        )}
      </>
    );
      
}

export default MainX