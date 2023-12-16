import './App.css'

// CONTENTFUL
// import useContentful from './useContentful'
import { createClient } from "contentful"

// COMPONENTS
import Header from './components/Header'
import Footer from './components/Footer'

// PAGES
import Calendar from './pages/Calendar'
import Home from './pages/Home'
import News from './pages/News'
import Partners from './pages/Partners'
// import RacingNews from './pages/RacingNews'
import Team from './pages/Team'
import ViewArticle from './pages/ViewArticle'

// HOOKS
import { useEffect, useState } from 'react'
// COMPNENTS FROM REACT ROUTER
import { Route, Routes } from 'react-router-dom'



function App() {
  // SETTING STATE FOR EACH DATA COLLECTION
  const [mainContent, setMainContent] = useState([])
  const [teamContent, setTeamContent] = useState([])
  const [partnersContent, setPartnersContent] = useState([])
  const [calendarContent, setCalendarContent] = useState([])
  // const [racingContent, setRacingContent] = useState([])
  const [newsContent, setNewsContent] = useState([])

  // ACCESSING CONTENTFUL
  // const { getMainContent, getTeamContent, getPartnersContent, getCalendarContent, getRacingContent, getNewsContent } = useContentful()

  const spaceID = process.env.REACT_APP_CONTENTFUL_SPACE_ID
  const previewToken = process.env.REACT_APP_CONTENTFUL_PREVIEW_TOKEN

  const client = createClient({
    space: `${spaceID}`,
    accessToken: `${previewToken}`,
    host: 'preview.contentful.com',
  })

  // USEEFFECT
  // main useEffect
  useEffect(() => {
    const getMainContent = async () => {
      try {
        const mainContent = await client.getEntries({
          content_type: 'mainContent',
          select: 'fields',
        })

        const sanitizedContent = mainContent.items.map((item) => {
          return {
            ...item.fields
          }
        })
        console.log(sanitizedContent)
        return sanitizedContent
      } catch (err) {
        console.log(`ERROR FETCHING MAIN CONTENT FROM CONTENTFUL: ${err}`)
      }
    }
    getMainContent().then((response) => setMainContent(response))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // team useEffect
  useEffect(() => {
    const getTeamContent = async () => {
      try {
        const teamContent = await client.getEntries({
          content_type: 'team',
          select: 'fields',
        })

        const sanitizedContent = teamContent.items.map((item) => {
          return {
            ...item.fields
          }
        })
        console.log(sanitizedContent)
        return sanitizedContent
      } catch (err) {
        console.log(`ERROR FETCHING PAGE CONTENT FROM CONTENTFUL: ${err}`)
      }
    }
    getTeamContent().then((response) => setTeamContent(response))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // partners useEffect
  useEffect(() => {
    const getPartnersContent = async () => {
      try {
        const partnersContent = await client.getEntries({
          content_type: 'partners',
          select: 'fields',
        })

        const sanitizedContent = partnersContent.items.map((item) => {
          return {
            ...item.fields
          }
        })
        console.log(sanitizedContent)
        return sanitizedContent
      } catch (err) {
        console.log(`ERROR FETCHING PAGE CONTENT FROM CONTENTFUL: ${err}`)
      }
    }
    getPartnersContent().then((response) => setPartnersContent(response))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // calendar useEffect
  useEffect(() => {
    const getCalendarContent = async () => {
      try {
        const calendarContent = await client.getEntries({
          content_type: 'calendarEvents',
          select: 'fields',
        })

        const sanitizedContent = calendarContent.items.map((item) => {
          return {
            ...item.fields
          }
        })
        console.log(sanitizedContent)
        return sanitizedContent
      } catch (err) {
        console.log(`ERROR FETCHING PAGE CONTENT FROM CONTENTFUL: ${err}`)
      }
    }
    getCalendarContent().then((response) => setCalendarContent(response))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // // racing useEffect
  // useEffect(() => {
  //   const getRacingContent = async () => {
  //     try {
  //       const racingContent = await client.getEntries({
  //         content_type: 'teamNews',
  //         select: 'fields',
  //       })

  //       const sanitizedContent = racingContent.items.map((item) => {
  //         return {
  //           ...item.fields
  //         }
  //       })
  //       console.log(sanitizedContent)
  //       return sanitizedContent
  //     } catch (err) {
  //       console.log(`ERROR FETCHING PAGE CONTENT FROM CONTENTFUL: ${err}`)
  //     }
  //   }
  //   getRacingContent().then((response) => setRacingContent(response))
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // news useEffect
  useEffect(() => {
    const getNewsContent = async () => {
      try {
        const newsContent = await client.getEntries({
          content_type: 'teamNews',
          select: 'fields',
        })

        const sanitizedContent = newsContent.items.map((item) => {
          return {
            ...item.fields,
            ...item.sys
          }
        })
        console.log(sanitizedContent)
        return sanitizedContent
      } catch (err) {
        console.log(`ERROR FETCHING PAGE CONTENT FROM CONTENTFUL: ${err}`)
      }
    }
    getNewsContent().then((response) => setNewsContent(response))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Header
        mainContent={mainContent}
      />
      <div className='flex flex-col min-h-screen'>
        <div>
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
            {/* <Route
            exact
            path='/racingnews/'
            element={<RacingNews racingContent={racingContent} />}
          /> */}
            <Route
              exact
              path='/news/'
              element={<News newsContent={newsContent} />}
            />
            <Route
              exact
              path='/news/:id'
              element={<ViewArticle newsContent={newsContent} />}
            />
          </Routes>
        </div>
        <div className=''>
          <Footer
            mainContent={mainContent}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
