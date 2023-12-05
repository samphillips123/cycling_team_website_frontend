import NewsArticle from "../components/NewsArticle"

const News = (props) => {
    return props.content.map((newsArticle) => <NewsArticle newsArticle={newsArticle} key={newsArticle._id} />)
    // need to filter content to only general news.
}

export default News