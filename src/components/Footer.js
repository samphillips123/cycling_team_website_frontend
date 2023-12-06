import TeamLogo from './TeamLogo'
import TeamSocials from './TeamSocials'

const Footer = (props) => {
    return (
        <div>
            <nav>
                <a href='/' id='teamHomeNav'>
                    {props.mainContent.map((team) => <TeamLogo team={team} key={team._id} />)}
                </a>
                {props.mainContent.map((socials) => <TeamSocials socials={socials} key={socials._id} />)}
            </nav>
        </div>
    )
}

export default Footer