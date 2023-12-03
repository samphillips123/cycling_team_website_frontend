import { createClient } from "contentful"

// guidance on setting up Contentful:
// https://www.youtube.com/watch?v=AWie7zwAyU0
const useContentful = () => {

    const client = createClient({
        space: '', // Need to set up in a .env
        accessToken: '', // Need to set up in a .env
        host: 'preview.contentful.com',
    })

    const getRiders = async () => {
        try {
            const riders = await client.getEntries({
                content_type: 'cyclingTeamRiders',
                select: 'fields',
                order: 'fields.fullName'
            })
            return riders
        } catch (err) {
            console.log(`ERROR FETCHING RIDERS: ${err}`)
        }
    }
    return { getRiders }
}

export default useContentful