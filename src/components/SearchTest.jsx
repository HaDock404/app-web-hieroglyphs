import React, { useState } from 'react';

function SearchTest({ search, onSearchChange }) {
    const [inputValue, setInputValue] = useState(search); // Stocker la valeur temporaire du champ

  // Fonction appelée lors du clic sur le bouton ou en appuyant sur "Entrée"
  const handleSearch = () => {
    onSearchChange(inputValue); // Envoyer la valeur actuelle au parent
  };

  // Fonction appelée lors de la saisie dans l'input
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Mettre à jour la valeur temporaire
  };

  // Fonction pour détecter "Entrée"
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(); // Appeler la recherche si "Entrée" est pressée
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un tag..."
        value={inputValue}
        onChange={handleInputChange} // Mettre à jour la valeur du champ
        onKeyDown={handleKeyPress} // Détecter la touche "Entrée"
        style={{
          padding: '10px',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          marginTop: '100px',
        }}
      />
      <button
        onClick={handleSearch} // Appeler la recherche au clic
        style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Rechercher
      </button>
    </div>
  );
}

export default SearchTest