const RacingNewsArticle = ({ racingArticle }) => {
    return (
        // need to filter content to only racing news.
        <div>
            {/* <img src={racingArticle.newsTitleImg.fields.file.url} alt={`"${racingArticle.newsTitle}" article.`} /> */}
            <h3>{racingArticle.newsTitle}</h3>
        </div>
    )
}

export default RacingNewsArticle