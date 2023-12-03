import React, { useState } from 'react';
import './App.css';
import ToggleModeButton from './ToggleModeButton';

function App() {
  const [isNightMode, setNightMode] = useState(false);

  const toggleMode = () => {
    setNightMode(!isNightMode);
  };

  return (
    <div className={`App ${isNightMode ? 'night' : 'day'}`}>
      <header className="App-header">
        <h1>{isNightMode ? 'Modalità Notte' : 'Modalità Giorno'}</h1>
        <ToggleModeButton onClick={toggleMode} />
      </header>
    </div>
  );
}

export default App;