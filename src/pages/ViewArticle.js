import {useMemo} from 'react'
import {useParams} from 'react-router-dom'
import { useMediaQuery } from '../utils/useMediaQuery';

const ViewArticle = ({ viewNewsContent }) => {
    // media query hook
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    const params = useParams()

    const currentId = params.id

    const currentArticle = useMemo(() => viewNewsContent.find(article => article.id === parseInt(params.id)), [params.id, viewNewsContent])

    console.log(currentArticle)
    console.log(currentId)

    return (
        <div>
            {/* <h1>{currentArticle.newsTitle}</h1> */}
        </div>
    )
}

export default ViewArticle