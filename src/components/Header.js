import TeamLogo from './TeamLogo'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <div>
            <nav>
                <Link to={'/'}>
                    {props.mainContent.map((team) => <TeamLogo team={team} key={team._id} />)}
                </Link>
                <Link to={'/team/'} >
                    <h3>Team</h3>
                </Link>
                <Link to={'/partners/'} >
                    <h3>Partners</h3>
                </Link>
                <Link to={'/calendar/'} >
                    <h3>Calendar</h3>
                </Link>
                <Link to={'/racingnews/'} >
                    <h3>Racing</h3>
                </Link>
                <Link to={'/news/'} >
                    <h3>News</h3>
                </Link>
            </nav>
        </div>
    )
}

export default Header