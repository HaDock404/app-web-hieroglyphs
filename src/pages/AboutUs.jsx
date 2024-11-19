import React, { useState } from 'react';
import Header from "../components/Header"
import Search from '../components/SearchTest';
import Display from '../components/DisplayTest';

import * as Hieroglyphs from '@hieroglyphs.io/react'
import pluginsData from '../data/plugin-list.json';


function AboutUs() {
    const sortedPlugins = [...pluginsData].sort((a, b) => a.plugin_name.localeCompare(b.plugin_name));
    const [search, setSearch] = useState(''); // État pour le texte recherché

    // Fonction de mise à jour du texte recherché
    const handleSearchChange = (value) => {
        setSearch(value.toLowerCase());
    };

    // Filtrer les éléments selon le texte recherché
    const filteredItems = sortedPlugins.filter((item) =>
        item.tags.some((tag) => tag.includes(search))
    );

    return (
        <>
            <Header />
            <Search search={search} onSearchChange={handleSearchChange} />
            <Display items={filteredItems} />
        </>
    )
}

export default AboutUs