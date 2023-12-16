import { useMediaQuery } from '../utils/useMediaQuery';

const NewsArticle = ({ newsArticle }) => {
    // media query hook
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    return (
        <div className='mt-5 border-t-2 border-black'>
            <div className={
                isDesktop
                ? 'flex m-5 font-bold text-3xl hover:cursor-pointer'
                : 'flex flex-col justify-center items-center m-5 font-bold text-3xl hover:cursor-pointer'}>
                <img className='bg-slate-100 max-w-md' src={newsArticle.newsTitleImg.fields.file.url} alt={`"${newsArticle.newsTitle}" article.`} />
                <h3 className={
                    isDesktop
                    ? 'ml-5 w-44'
                    : 'mt-5 text-center'}>
                    {newsArticle.newsTitle}
                    </h3>
            </div>
        </div>
    )
}

export default NewsArticle