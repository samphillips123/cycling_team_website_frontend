import NewsArticle from "../components/NewsArticle"

const News = (props) => {
    return (
        <div className='flex flex-col absolute top-32 left-20'>
            <h1 className='font-bold text-2xl'>Team News</h1>
            <div>
                {props.newsContent
                    // sorting by when image was added since that matches when the article was created. Oldest article at the bottom.
                    .sort((a, b) => a.newsTitleImg.sys.createdAt < b.newsTitleImg.sys.createdAt ? 1 : -1)
                    .map((newsArticle) => <NewsArticle newsArticle={newsArticle} key={newsArticle._id} />)
                }
            </div>
        </div>
    )
}

export default News