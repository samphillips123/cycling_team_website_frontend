const NewsArticle = ({ newsArticle }) => {
    return (
        // need to filter content to only general news.
        <div>
            {/* <img src={newsArticle.newsTitleImg.fields.file.url} alt={`"${newsArticle.newsTitle}" article.`} /> */}
            <h3>{newsArticle.newsTitle}</h3>
        </div>
    )
}

export default NewsArticle