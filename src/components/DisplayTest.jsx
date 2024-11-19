import React from 'react';

function DisplayTest({ items }) {
    return (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {items.length > 0 ? (
            items.map((item) => (
              <li
                key={item.id}
                style={{
                  padding: '10px',
                  marginBottom: '10px',
                  border: '1px solid #eee',
                  borderRadius: '5px',
                }}
              >
                <strong>{item.name}</strong>
                <p>Tags : {item.tags.join(', ')}</p>
              </li>
            ))
          ) : (
            <p>Aucun élément trouvé</p>
          )}
        </ul>
      );
}

export default DisplayTest