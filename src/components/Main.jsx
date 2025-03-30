import React, { useEffect, useRef, useState } from 'react';
import '../styles/main.css'

import Icon5 from './Icon5';

import * as Hieroglyphs from '@hieroglyphs.io/react'

import pluginsData from '../data/plugin-list.json';

function MainX({ items }) {
    const mainRef = useRef(null);
    const [isUp, setIsUp] = useState(false);
    const [isSmallMain, setIsSmallMain] = useState(window.innerWidth < 739);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlugin, setSelectedPlugin] = useState(null);
    const [content, setContent] = useState("test ouverture");
    const [pluginDetails, setPluginDetails] = useState("No tags")
    const [pluginComponent1, setPluginComponent1] = useState("No plugin")
    const [pluginComponent2, setPluginComponent2] = useState("No plugin")
    const [pluginComponent3, setPluginComponent3] = useState("No plugin")
    const [selectedButton, setSelectedButton] = useState(1);

    const [selectedPluginX, setSelectedPluginX] = useState(null);

    const openModal = (plugin_name, plugin_component) => {
      setSelectedPlugin(plugin_name);
      setSelectedPluginX(plugin_component)
      setIsModalOpen(true);
      
      const plugin = pluginsData.find((p) => p.plugin_name === plugin_name);
      const tags = plugin ? plugin.tags.join(", ") : "No tags";
      setPluginDetails(tags);
      setContent(tags)
      setSelectedButton(1);

      const reactText = plugin ? plugin.plugin_component : "No plugin";
      setPluginComponent1(`
        <div style="
          color: #024f29;
          background-color: white;
          font-weight: 400;
          width: 250px;
          height: 18px;
          margin-bottom: 5px;
          padding-left: 3px;
          "
        >
          npm install @hieroglyphs.io/react
        </div>
        
        <div style="background-color: white; width: 180px; height: 18px; padding-left: 3px;">
          <i style="color: #024f29; font-style: normal;">import</i> <i style="color: #024f29; font-style: normal;">React</i> <i style="color: #024f29; font-style: normal;">from</i> <i style="color: #024f29; font-style: normal;">'react'</i>;
        </div>
        <div style="background-color: white; width: 380px; color: #024f29; margin-bottom: 5px; padding-left: 3px;">
          <i style="color: #024f29; font-style: normal;">import</i> * <i style="color: #024f29; font-style: normal;">as</i> Hieroglyphs <i style="color: #024f29; font-style: normal;">from</i> <i style="color: #024f29; font-style: normal;">'@hieroglyphs.io/react'</i>;
       </div>
        <i style="background-color: white; color: #024f29; font-style: normal; height: 18px; padding-left: 3px; padding-right: 3px;">&lt;Hieroglyphs.${reactText} /&gt;</i>
        `)
      setPluginComponent2(`
        <div style="
          color: #024f29;
          background-color: white;
          font-weight: 400;
          width: 250px;
          height: 18px;
          margin-bottom: 5px;
          padding-left: 3px;
          "
        >
          pod 'Hieroglyphs'
        </div>
        
        <div style="background-color: white; width: 350px; height: 18px; color:#024f29;>
          <i style="background-color: white; color: #024f29; font-style: normal; height: 18px;">
            import Hieroglyphs
          </i>
          </br></br>
          <i style="width: 450px; background-color: white; color: #024f29; font-style: normal; height: 18px;">
            let icon = Hieroglyphs.${reactText}()
          </i>
        </div>
        `)
      setPluginComponent3(`
        <div style="
          color: #024f29;
          background-color: white;
          font-weight: 400;
          width: 250px;
          height: 18px;
          margin-bottom: 5px;
          padding-left: 3px;
          "
        >
          npm install @hieroglyphs.io/vue
        </div>
        
        <div style="background-color: white; width: 500px;">
          <i style="background-color: white; color: #024f29; font-style: normal; height: 18px; padding-left: 0px; padding-right: 3px;">
          &lt;script setup&gt; <br/>
          import { ${reactText} } from '@hieroglyphs.io/vue'; <br/>
          &lt;/script setup&gt;
          </i>
        </div>
        <div style="background-color: white; width: 500px; margin-top:3px;">
        <i style="background-color: white; color: #024f29; font-style: normal; height: 18px; padding-left: 0px; padding-right: 3px;">
        &lt;template&gt; <br/>
        &lt;${reactText}&gt; <br/>
        &lt;/template&gt;
        </i>
      </div>
        `)
    };

    const handleButtonClick = (newContent, buttonId) => {
      setContent(newContent);
      setSelectedButton(buttonId);
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
          <div className="modal-overlay" 
            onClick={() => {
              setIsModalOpen(false);
              setContent("test ouverture")
            }}
          >
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
                    <div className='modal-placement-el2-box1'>
                      <button 
                        className={`modal-placement-button-content ${selectedButton === 1 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(pluginDetails, 1)}>
                          Tags
                      </button>
                      <button 
                        className={`modal-placement-button-content ${selectedButton === 2 ? 'selected' : ''}`} 
                        onClick={() => handleButtonClick(pluginComponent1, 2)}>
                          React
                      </button>
                      <button 
                        className={`modal-placement-button-content ${selectedButton === 3 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(pluginComponent2, 3)}>
                          Swift
                      </button>
                      <button 
                        className={`modal-placement-button-content ${selectedButton === 4 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(pluginComponent3, 4)}>
                          Vue
                      </button>
                    </div>
                    <div className='modal-placement-el2-box2'>
                      <div dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                </div>
                <button className='modal-button' 
                  onClick={() => {
                    setIsModalOpen(false);
                    setContent("test ouverture")
                  }}
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

export default MainX