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

// let collection = 'team' // this will be changed to state that sets the value based off which navbar tab is selected. This will specify the collection that is fetched from useContentful.js
// ['calendarEvents', 'mainContent', 'partners', 'team', 'teamNews']



function App() {
  const [mainContent, setMainContent] = useState([])
  const [pageContent, setPageContent] = useState([])
  const [collection, setCollection] = useState('team')
  const { getMainContent, getPageContent } = useContentful(collection)



  useEffect(() => {
    getPageContent().then((response) => setPageContent(response))
  })

  useEffect(() => {
    getMainContent().then((response) => setMainContent(response))
  }, [])
  // useEffect(() => {
  //   getMainContent().then((response) => console.log(response))
  // },[])

  return (
    <div className="App">
      <Header
        mainContent={mainContent}
        setCollection={setCollection}
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
          element={<Team pageContent={pageContent} />}
        />
        <Route
          exact
          path='/partners/'
          element={<Partners pageContent={pageContent} />}
        />
        <Route
          exact
          path='/calendar/'
          element={<Calendar pageContent={pageContent} />}
        />
        <Route
          exact
          path='/racingnews/'
          element={<RacingNews pageContent={pageContent} />}
        />
        <Route
          exact
          path='/news/'
          element={<News pageContent={pageContent} />}
        />
      </Routes>
      <Footer mainContent={mainContent} />
    </div>
  );
}

export default App;
