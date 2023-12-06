import { createClient } from "contentful"

// IMPORT API ACCESS FROM ENV
const spaceID = process.env.REACT_APP_CONTENTFUL_SPACE_ID
const previewToken = process.env.REACT_APP_CONTENTFUL_PREVIEW_TOKEN
// const deliveryToken = process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN

// guidance on setting up Contentful:
// https://www.youtube.com/watch?v=AWie7zwAyU0
const useContentful = (collection) => {

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

    const getPageContent = async () => {
        try {
            const pageContent = await client.getEntries({
                content_type: collection,
                select: 'fields',
            })

            const sanitizedContent = pageContent.items.map((item) => {
                return {
                    ...item.fields
                }
            })

            return sanitizedContent
        } catch (err) {
            console.log(`ERROR FETCHING PAGE CONTENT FROM CONTENTFUL: ${err}`)
        }
    }

    return { getMainContent, getPageContent }
}

export default useContentful
