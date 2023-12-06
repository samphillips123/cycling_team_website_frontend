// IMPORT SOCIAL MEDIA ICONS (change between 24 & 32 to control size)
import facebookLogo24 from '../public/imgs/facebook-logo-24.png'
import instagramLogo24 from '../public/imgs/instagram-logo-24.png'
import twitterLogo24 from '../public/imgs/twitter-logo-24.png'
import youtubeLogo24 from '../public/imgs/youtube-logo-24.png'

const TeamSocials = ({ socials }) => {
    return (
        <div>
            <nav>
                <a href={socials.instagramUrl}>
                    <img src={instagramLogo24} alt='Instagram icon with link.' />
                </a>
                <a href={socials.twitterXUrl}>
                    <img src={twitterLogo24} alt='Twitter icon with link.' />
                </a>
                <a href={socials.facebookUrl}>
                    <img src={facebookLogo24} alt='Facebook icon with link.' />
                </a>
                <a href={socials.youTubeUrl}>
                    <img src={youtubeLogo24} alt='YouTube icon with link.' />
                </a>
            </nav>
        </div>
    )
}

export default TeamSocials