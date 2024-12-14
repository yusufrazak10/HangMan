import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Game from './components/Game';
import Help from './components/Help';  
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Hangman Game</h1>
          <Routes>
            {/* The path for the Game component */}
            <Route path="/" element={<Game />} />  
            {/* The path for the Help component */}
            <Route path="/help" element={<Help />} />  
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

