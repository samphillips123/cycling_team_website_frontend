import { createClient } from "contentful"

// IMPORT API ACCESS FROM ENV
const spaceID = process.env.REACT_APP_CONTENTFUL_SPACE_ID
const previewToken = process.env.REACT_APP_CONTENTFUL_PREVIEW_TOKEN
// const deliveryToken = process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN

// guidance on setting up Contentful:
// https://www.youtube.com/watch?v=AWie7zwAyU0
const useContentful = () => {

    const client = createClient({
        space: `${spaceID}`,
        accessToken: `${previewToken}`,
        host: 'preview.contentful.com',
    })

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

            return sanitizedContent
        } catch (err) {
            console.log(`ERROR FETCHING MAIN CONTENT FROM CONTENTFUL: ${err}`)
        }
    }

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

            return sanitizedContent
        } catch (err) {
            console.log(`ERROR FETCHING PAGE CONTENT FROM CONTENTFUL: ${err}`)
        }
    }

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

            return sanitizedContent
        } catch (err) {
            console.log(`ERROR FETCHING PAGE CONTENT FROM CONTENTFUL: ${err}`)
        }
    }

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

            return sanitizedContent
        } catch (err) {
            console.log(`ERROR FETCHING PAGE CONTENT FROM CONTENTFUL: ${err}`)
        }
    }

    const getRacingContent = async () => {
        try {
            const racingContent = await client.getEntries({
                content_type: 'teamNews',
                select: 'fields',
            })

            const sanitizedContent = racingContent.items.map((item) => {
                return {
                    ...item.fields
                }
            })

            return sanitizedContent
        } catch (err) {
            console.log(`ERROR FETCHING PAGE CONTENT FROM CONTENTFUL: ${err}`)
        }
    }

    const getNewsContent = async () => {
        try {
            const newsContent = await client.getEntries({
                content_type: 'teamNews',
                select: 'fields',
            })

            const sanitizedContent = newsContent.items.map((item) => {
                return {
                    ...item.fields
                }
            })

            return sanitizedContent
        } catch (err) {
            console.log(`ERROR FETCHING PAGE CONTENT FROM CONTENTFUL: ${err}`)
        }
    }

    return { getMainContent, getTeamContent, getPartnersContent, getCalendarContent, getRacingContent, getNewsContent }
}

export default useContentful
