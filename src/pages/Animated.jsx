import React, { useState } from 'react';
import pluginsData from '../data/animated-list.json';

import Header from "../components/Header"
import IntroSearch from "../components/IntroSearch"
import MainAnimated from "../components/MainAnimated"

function Animated() {
    const sortedPlugins = [...pluginsData].sort((a, b) => a.animated_name.localeCompare(b.animated_name));
    const [search, setSearch] = useState('');
    const handleSearchChange = (value) => {
        setSearch(value.toLowerCase());
    };
    
    const filteredItems = sortedPlugins.filter((item) =>
        item.tags.some((tag) => tag.includes(search))
    );

    return (
        <div id="main-container">
            <Header />
            <IntroSearch search={search} onSearchChange={handleSearchChange}/>
            {<MainAnimated items={filteredItems}/>}
        </div>
    )
}

export default Animated