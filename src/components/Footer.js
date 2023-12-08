import { Link } from 'react-router-dom'
import TeamLogo from './TeamLogo'
import TeamSocials from './TeamSocials'

const Footer = (props) => {
    return (
        <div class='footer'>
            <Link to='/' class='footerLogo' >
                {props.mainContent.map((team) => <TeamLogo team={team} key={team._id} />)}
            </Link>
            <div class='footerSocials'>
                {props.mainContent.map((socials) => <TeamSocials socials={socials} key={socials._id} />)}
            </div>
        </div>
    )
}

export default Footer