import './App.css'

// CONTENTFUL
import useContentful from './useContentful'

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
// const apiURL = 'http://localhost:8000'

const collection = 'partners' // this will be changed to state that sets the value based off which navbar tab is selected. This will specify the collection that is fetched from useContentful.js
// ['calendarEvents', 'mainContent', 'partners', 'team', 'teamNews']



function App() {
  const [content, setContent] = useState([])
  const { getContent } = useContentful(collection)

  

  useEffect(() => {
    getContent().then((response) => setContent(response))
  })

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
          element={<Team content={content} />}
        />
        <Route
          exact
          path='/partners/'
          element={<Partners content={content} />}
        />
        <Route
          exact
          path='/calendar/'
          element={<Calendar content={content} />}
        />
        <Route
          exact
          path='/racingnews/'
          element={<RacingNews content={content} />}
        />
        <Route
          exact
          path='/news/'
          element={<News content={content} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
