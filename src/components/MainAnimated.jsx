import React, { useEffect, useRef, useState } from 'react';
import '../styles/main_stickers.css'
import LazyVideo from './LazyVideo'

import Icon5 from './Icon5';
import DownloadButton from './DownloadButton'
import SocialCopyButton from './SocialCopyButton';
import {Facebook, Pinterest, X, Link} from './SocialLogo.jsx'

function MainAnimated({ items }) {
    const mainRef = useRef(null);
    const [isUp, setIsUp] = useState(false);
    const [isSmallMain, setIsSmallMain] = useState(window.innerWidth < 739);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlugin, setSelectedPlugin] = useState(null);
    const [selectedPluginX, setSelectedPluginX] = useState(null);
    const SelectedIcon = selectedPluginX ? selectedPluginX : null;
    
    const openModal = (sticker_name, sticker_path) => {
      setSelectedPlugin(sticker_name);
      setSelectedPluginX(sticker_path)
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
                    onClick={() => openModal(animated_name, animated_path)}
                  >
                    <div className="box-main-el1-stickers">
                      <LazyVideo src={animated_path} />
                    </div>
                    <div className="box-main-el2-animated">{animated_name}</div>
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
                        <div className='video-modal-stickers'>
                          <LazyVideo src={SelectedIcon} />
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
                      <div className='modal-placement-el2-box2-stickers-title'>
                        Every time you attribute, you make a designer happy
                      </div>
                      <div className='modal-placement-el2-box2-stickers-body'>
                        To use these stickers freely you must mention the owner of the design on your social networks or indicate the download URL of the sticker.
                      </div>
                      <div className='social-button-box'>
                        <SocialCopyButton link="https://pinterest.com/flaticon/" logo={Pinterest}/>
                        <SocialCopyButton link="https://www.facebook.com/flaticon/" logo={Facebook}/>
                        <SocialCopyButton link="https://x.com/flaticon" logo={X}/>
                        <SocialCopyButton link="https://www.flaticon.com/" logo={Link}/>
                      </div>
                      
                      
                      
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

export default MainAnimated