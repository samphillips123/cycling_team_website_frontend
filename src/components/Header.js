import TeamLogo from './TeamLogo'
import { Link } from 'react-router-dom'

const Header = ({ mainContent, setCollection }) => {
    return (
        <div>
            <nav>
                <Link to={'/'}>
                    {mainContent.map((team) => <TeamLogo team={team} key={team._id} />)}
                </Link>
                <Link to={'/team/'} onClick={() => setCollection('team')} >
                    <h3>Team</h3>
                </Link>
                <Link to={'/partners/'} onClick={() => setCollection('partners')} >
                    <h3>Partners</h3>
                </Link>
                <Link to={'/calendar/'} onClick={() => setCollection('calendarEvents')} >
                    <h3>Calendar</h3>
                </Link>
                <Link to={'/racingnews/'} onClick={() => setCollection('teamNews')} >
                    <h3>Racing</h3>
                </Link>
                <Link to={'/news/'} onClick={() => setCollection('teamNews')} >
                    <h3>News</h3>
                </Link>
            </nav>
        </div>
    )
}

export default Header