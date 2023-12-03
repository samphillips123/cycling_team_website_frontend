import { createClient } from "contentful"

// IMPORT API ACCESS FROM ENV
const spaceID = process.env.CONTENTFUL_SPACE_ID
const previewToken = process.env.CONTENTFUL_PREVIEW_TOKEN
// const deliveryToken = process.env.CONTENTFUL_DELIVERY_TOKEN

console.log(`SPACE ID: ${spaceID}`)
console.log(`PREVIEW TOKEN: ${previewToken}`)

// guidance on setting up Contentful:
// https://www.youtube.com/watch?v=AWie7zwAyU0
const useContentful = (collection) => {

    const client = createClient({
        space: `${spaceID}`,
        accessToken: `${previewToken}`,
        host: 'preview.contentful.com',
    })

    const getContent = async () => {
        try {
            const content = await client.getEntries({
                content_type: collection,
                select: 'fields',
            })
            return content
        } catch (err) {
            console.log(`ERROR FETCHING FROM CONTENTFUL: ${err}`)
        }
    }
    return { getContent }
}

export default useContentful