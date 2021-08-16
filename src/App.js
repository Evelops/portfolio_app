import React from 'react';
import './App.css';
import Navigation from './Navigation';
import MainContent from './MainContent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navigation/>
      </header>
        <div>
        <MainContent/>
        </div>
    
    </div>
  );
}

export default App;
