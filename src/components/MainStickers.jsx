import React, { useEffect, useRef, useState } from 'react';
import '../styles/main_stickers.css'

import Icon5 from './Icon5';
import DownloadButton from './DownloadButton'

function MainStickers({ items }) {
    const mainRef = useRef(null);
    const [isUp, setIsUp] = useState(false);
    const [isSmallMain, setIsSmallMain] = useState(window.innerWidth < 739);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlugin, setSelectedPlugin] = useState(null);

    const [selectedButton, setSelectedButton] = useState(1);
    const [Copy, setCopy] = useState("")


    const [selectedPluginX, setSelectedPluginX] = useState(null);
    const SelectedIcon = selectedPluginX ? selectedPluginX : null;

    const openModal = (sticker_name, sticker_path) => {
      setSelectedPlugin(sticker_name);
      setSelectedPluginX(sticker_path)
      setIsModalOpen(true);
      setSelectedButton(1);
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
              items.map(({ id, sticker_name, sticker_path }) => {
                const imagePath = sticker_path;
                if (!imagePath) {
                  console.warn(`Composant introuvable pour : ${sticker_path}`);
                  return null;
                }
  
                return (
                  <div
                    className="box-main-stickers"
                    key={id}
                    onClick={() => openModal(sticker_name, sticker_path)}
                  >
                    <div className="box-main-el1-stickers">
                      <img
                      className='img-stickers'
                        src={imagePath}
                        alt={sticker_name}
                        style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                      />
                    </div>
                    <div className="box-main-el2-stickers">{sticker_name}</div>
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
          <div className="modal-overlay-stickers" 
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            <div className="modal-content-stickers" onClick={(e) => e.stopPropagation()}>
              <div className='modal-placement-stickers'>
                <div className='modal-placement-el1-stickers'>
                  <div className='modal-placement-el1-box1-stickers'>
                      {SelectedIcon ? (
                        <div className='img-modal-stickers'>
                          <img src={SelectedIcon} alt="" />
                        </div>
                      
                        ) : (
                      <p>/error</p>
                    )}
                    
                    <div className='modal-placement-el1-box1-name-stickers'>
                      {selectedPlugin}
                    </div>
                  </div>
                  <div className='modal-placement-el1-box2-stickers'>
                    available in V1.0+ <br/>
                  </div>
                </div>
                <div className='modal-placement-el2-stickers'>
                    <div className='modal-placement-el2-box1-stickers'>
                      
                      
                      
                    </div>
                    <div className='modal-placement-el2-box2-stickers'>
                      test
                      
                      <DownloadButton link={SelectedIcon} name={selectedPlugin}/>
                    </div>
                </div>
                <button className='modal-button-stickers' 
                  onClick={() => {
                    setIsModalOpen(false);}}
                >
                  <Icon5 />
                </button>
              </div>

            </div>
          </div>
        )}
      </>
    );
      
}

export default MainStickers