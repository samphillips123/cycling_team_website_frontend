import NewsArticle from "../components/NewsArticle"

const News = (props) => {
    return (
        <div className='m-24'>
            <h1 className='font-bold text-2xl mb-4'>Team News</h1>
            <div className='flex flex-col justify-center items-center'>
                <div>
                    {props.newsContent
                        // sorting by when image was added since that matches when the article was created. Oldest article at the bottom.
                        .sort((a, b) => a.newsTitleImg.sys.createdAt < b.newsTitleImg.sys.createdAt ? 1 : -1)
                        .map((newsArticle) => <NewsArticle newsArticle={newsArticle} key={newsArticle._id} />)
                    }
                </div>
            </div>
        </div>

    )
}

export default News