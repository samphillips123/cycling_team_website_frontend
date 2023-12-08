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

// let collection = 'team' // this will be changed to state that sets the value based off which navbar tab is selected. This will specify the collection that is fetched from useContentful.js
// ['calendarEvents', 'mainContent', 'partners', 'team', 'teamNews']



function App() {
  // SETTING STATE FOR EACH DATA COLLECTION
  const [mainContent, setMainContent] = useState([])
  const [teamContent, setTeamContent] = useState([])
  const [partnersContent, setPartnersContent] = useState([])
  const [calendarContent, setCalendarContent] = useState([])
  const [racingContent, setRacingContent] = useState([])
  const [newsContent, setNewsContent] = useState([])

  // ACCESSING CONTENTFUL
  const { getMainContent, getTeamContent, getPartnersContent, getCalendarContent, getRacingContent, getNewsContent } = useContentful()

  // useEFFECT FOR EACH DATA COLLECTION
  useEffect(() => {
    getMainContent().then((response) => setMainContent(response))
  }, [])
  useEffect(() => {
    getTeamContent().then((response) => setTeamContent(response))
  })
  useEffect(() => {
    getPartnersContent().then((response) => setPartnersContent(response))
  })
  useEffect(() => {
    getCalendarContent().then((response) => setCalendarContent(response))
  })
  useEffect(() => {
    getRacingContent().then((response) => setRacingContent(response))
  })
  useEffect(() => {
    getNewsContent().then((response) => setNewsContent(response))
  })

  return (
    <div className="App">
      <Header
        mainContent={mainContent}
      />
      <Routes>
        <Route
          exact
          path='/'
          element={<Home />}
        />
        <Route
          exact
          path='/team/'
          element={<Team teamContent={teamContent} />}
        />
        <Route
          exact
          path='/partners/'
          element={<Partners partnersContent={partnersContent} />}
        />
        <Route
          exact
          path='/calendar/'
          element={<Calendar calendarContent={calendarContent} />}
        />
        <Route
          exact
          path='/racingnews/'
          element={<RacingNews racingContent={racingContent} />}
        />
        <Route
          exact
          path='/news/'
          element={<News newsContent={newsContent} />}
        />
      </Routes>
      <Footer
        mainContent={mainContent}
      />
    </div>
  );
}

export default App;
