import React, { useState } from 'react';
import pluginsData from '../data/sticker-list.json';

import Header from "../components/Header"
import IntroSearch from "../components/IntroSearch"
import MainStickers from "../components/MainStickers"

function Stickers() {
    const sortedPlugins = [...pluginsData].sort((a, b) => a.plugin_name.localeCompare(b.plugin_name));
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
            <MainStickers items={filteredItems}/>
        </div>
    )
}

export default Stickers