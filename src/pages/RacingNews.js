import RacingNewsArticle from "../components/RacingNewsArticle"

const RacingNews = (props) => {
    return props.content.map((racingArticle) => <RacingNewsArticle racingArticle={racingArticle} key={racingArticle._id} />)
    // need to filter content to only racing news.
}

export default RacingNews