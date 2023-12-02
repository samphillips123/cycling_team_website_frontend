import './App.css'
// COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';

// HOOKS
import { useEffect, useState } from 'react'
// COMPNENTS FROM REACT ROUTER
import { Route, Routes } from 'react-router-dom'

// API URL
const apiURL = 'http://localhost:8000'

function App() {
  // STATE

  return (
    <div className="App">
      <h1>Cycling Team Website</h1>
      <Header />
      <Routes>
        <Route
          exact
          path='/'
          // element={}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
