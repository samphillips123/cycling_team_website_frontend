import NewsArticle from "../components/NewsArticle"

const News = (props) => {
    return props.pageContent.map((newsArticle) => <NewsArticle newsArticle={newsArticle} key={newsArticle._id} />)
    // need to filter content to only general news.
}

export default News