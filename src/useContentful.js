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

    const getPageContent = async () => {
        try {
            const content = await client.getEntries({
                content_type: collection,
                select: 'fields',
            })

            const sanitizedContent = content.items.map((item) => {
                return {
                    ...item.fields
                }
            })

            return sanitizedContent
        } catch (err) {
            console.log(`ERROR FETCHING FROM CONTENTFUL: ${err}`)
        }
    }
    return { getPageContent }
}

export default useContentful
