import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Route path='/' component={Navbar} />
        <Route path='/' component={Home} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
