import LoginPage from './components/signin.js';
import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import News from './components/api.js';

function App() {
  return (
    <div className="App">
      <News/>
    </div>
  );
}

export default App;
