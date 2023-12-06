// IMPORT SOCIAL MEDIA ICONS
import facebookLogo24 from '../public/imgs/facebook-logo-24.png'
import instagramLogo24 from '../public/imgs/instagram-logo-24.png'
import twitterLogo24 from '../public/imgs/twitter-logo-24.png'
import youtubeLogo24 from '../public/imgs/youtube-logo-24.png'

const Footer = (props) => {
    return (
        <div>
            <nav>
                <a href='/' id='teamHomeNav'>TeamName</a>
                {/* The link for home will be replaced with a variable and rendered to the left of the header */}
                <a href='https://www.instagram.com/'>
                    <img src={instagramLogo24} alt='Instagram icon with link.' />
                </a>
                <a href='https://twitter.com/'>
                    <img src={twitterLogo24} alt='Twitter icon with link.' />
                </a>
                <a href='https://www.facebook.com/'>
                    <img src={facebookLogo24} alt='Facebook icon with link.' />
                </a>
                <a href='https://www.youtube.com/'>
                    <img src={youtubeLogo24} alt='YouTube icon with link.' />
                </a>
            </nav>
        </div>
    )
}

export default Footer