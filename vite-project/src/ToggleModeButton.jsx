import React from 'react';

const ToggleModeButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="toggle-button">
      Cambia Modalità
    </button>
  );
};

export default ToggleModeButton;