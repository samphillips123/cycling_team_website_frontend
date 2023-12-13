import { Link } from 'react-router-dom'
import TeamLogo from './TeamLogo'
import TeamSocials from './TeamSocials'

const Footer = (props) => {
    return (
        <div className='flex items-center justify-between'>
            <Link to='/' className='m-20' >
                {props.mainContent.map((team) => <TeamLogo team={team} key={team._id} />)}
            </Link>
            <div className='shrink-0'>
                {props.mainContent.map((socials) => <TeamSocials socials={socials} key={socials._id} />)}
            </div>
        </div>
    )
}

export default Footer