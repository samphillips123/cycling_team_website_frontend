import { Link } from 'react-router-dom'

// IMPORT SOCIAL MEDIA ICONS (change between 24 & 32 to control size)
import facebookLogo24 from '../assets/facebook-logo-24.png'
import instagramLogo24 from '../assets/instagram-logo-24.png'
import twitterLogo24 from '../assets/twitter-logo-24.png'
import youtubeLogo24 from '../assets/youtube-logo-24.png'

const TeamSocials = ({ socials }) => {
    return (
        <div className='flex mx-10 '>
            <Link to={socials.instagramUrl} target='_blank' className='m-5' >
                <img src={instagramLogo24} alt='Instagram icon with link.' />
            </Link>
            <Link to={socials.twitterXUrl} target='_blank' className='m-5' >
                <img src={twitterLogo24} alt='Twitter icon with link.' />
            </Link>
            <Link to={socials.facebookUrl} target='_blank' className='m-5' >
                <img src={facebookLogo24} alt='Facebook icon with link.' />
            </Link>
            <Link to={socials.youTubeUrl} target='_blank' className='m-5' >
                <img src={youtubeLogo24} alt='YouTube icon with link.' />
            </Link>
        </div>
    )
}

export default TeamSocials