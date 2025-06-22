import React, { useEffect, useRef, useState } from 'react';
import '../styles/main.css'

import Icon5 from './Icon5';
import CopyButton from './CopyButton'

import * as Hieroglyphs from '@hieroglyphs.io/react'

import pluginsData from '../data/plugin-list.json';

function Main({ items }) {
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
    const [Test1, setTest1] = useState("")
    const [Test2, setTest2] = useState("")
    const [Test3, setTest3] = useState("")
    const [Test4, setTest4] = useState("")
    const [Copy, setCopy] = useState("")

    const [selectedPluginX, setSelectedPluginX] = useState(null);

    const openModal = (plugin_name, plugin_component) => {
      setSelectedPlugin(plugin_name);
      setSelectedPluginX(plugin_component)
      setIsModalOpen(true);
      
      
      const plugin = pluginsData.find((p) => p.plugin_name === plugin_name);
      const tags = plugin ? plugin.tags.join(", ") : "No tags";
      setCopy(tags)
      setPluginDetails(tags);
      setContent(tags)
      setSelectedButton(1);

      const reactText = plugin ? plugin.plugin_component : "No plugin";
      setPluginComponent1(`
        <div class="plugin-component1-el1">
          npm install @hieroglyphs.io/react
        </div>
        
        <div class="plugin-component1-el2">
          <i class="plugin-component1-el2-i1">import</i> <i class="plugin-component1-el2-i2">React</i> <i class="plugin-component1-el2-i3">from</i> <i class="plugin-component1-el2-i4">'react'</i>;
        </div>
        <div class="plugin-component1-el3">
          <i class="plugin-component1-el3-i1">import</i> * <i class="plugin-component1-el3-i2">as</i> Hieroglyphs <i class="plugin-component1-el3-i3">from</i> <i class="plugin-component1-el3-i4">'@hieroglyphs.io/react'</i>;
       </div>
       <div class="plugin-component2-el3-i5-wrapper">
        <i class="plugin-component1-el3-i5">&lt;Hieroglyphs.<span class="react-text" title="${reactText}">${reactText}</span> /&gt;</i>
        </div>
        `)

      setPluginComponent2(`
        <div class="plugin-component2-el1">
          pod 'Hieroglyphs'
        </div>
        
        <div class="plugin-component2-el2">
          <i class="plugin-component2-el2-i1">
            import Hieroglyphs
          </i>
          <br><br>
          <div class="plugin-component2-el3-i5-wrapper">
            let icon = Hieroglyphs.<span class="react-text" title="${reactText}">${reactText}()</span>
          </div>
        </div>
      `)


      setPluginComponent3(`
        <div class="plugin-component3-el1">
          npm install @hieroglyphs.io/vue
        </div>
        
        <div class="plugin-component2-el3-i5-wrapper">
          <i class="plugin-component3-el2-i1">
          &lt;script setup&gt; <br/>
          import { <span class="react-text" title="${reactText}">${reactText}</span> } from '@hieroglyphs.io/vue'; <br/>
          &lt;/script setup&gt;
          </i>
        </div>

        <div class="plugin-component2-el3-i5-wrapper">
        <i class="plugin-component3-el3-i1">
        &lt;template&gt; <br/>
        &lt;<span class="react-text" title="${reactText}">${reactText}</span>&gt; <br/>
        &lt;/template&gt;
        </i>
      </div>
        `)
      setTest1(tags)
      setTest2(`Test2 ${reactText}`)
      setTest3(`Test3 ${reactText}`)
      setTest4(`Test4 ${reactText}`)
    };

    const handleButtonClick = (newContent, buttonId, test) => {
      setContent(newContent);
      setSelectedButton(buttonId);
      setCopy(test)
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
                        onClick={() => handleButtonClick(pluginDetails, 1, Test1)}>
                          Tags
                      </button>
                      <button 
                        className={`modal-placement-button-content ${selectedButton === 2 ? 'selected' : ''}`} 
                        onClick={() => handleButtonClick(pluginComponent1, 2, Test2)}>
                          React
                      </button>
                      <button 
                        className={`modal-placement-button-content ${selectedButton === 3 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(pluginComponent2, 3, Test3)}>
                          Swift
                      </button>
                      <button 
                        className={`modal-placement-button-content ${selectedButton === 4 ? 'selected' : ''}`}
                        onClick={() => handleButtonClick(pluginComponent3, 4, Test4)}>
                          Vue
                      </button>
                    </div>
                    <div className='modal-placement-el2-box2'>
                      <div dangerouslySetInnerHTML={{ __html: content }} />
                      <CopyButton text={Copy} />
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

export default Main