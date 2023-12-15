const NewsArticle = ({ newsArticle }) => {
    return (
        <div className='mt-5 border-t-2 border-black'>
            <div className='flex m-5 font-bold text-3xl hover:cursor-pointer'>
                <img className='bg-slate-100 max-w-md' src={newsArticle.newsTitleImg.fields.file.url} alt={`"${newsArticle.newsTitle}" article.`} />
                <h3 className='ml-5 w-44'>{newsArticle.newsTitle}</h3>
            </div>
        </div>
    )
}

export default NewsArticle