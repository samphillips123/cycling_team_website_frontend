import './App.css'
// COMPONENTS
import Header from './components/Header'
import Footer from './components/Footer'

// PAGES
import Calendar from './pages/Calendar'
import Home from './pages/Home'
import News from './pages/News'
import Partners from './pages/Partners'
import RacingNews from './pages/RacingNews'
import Team from './pages/Team'

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
          element={<Home />}
        />
        <Route
          exact
          path='/team/'
          element={<Team />}
        />
        <Route
          exact
          path='/partners/'
          element={<Partners />}
        />
        <Route
          exact
          path='/calendar/'
          element={<Calendar />}
        />
        <Route
          exact
          path='/racingnews/'
          element={<RacingNews />}
        />
        <Route
          exact
          path='/news/'
          element={<News />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
