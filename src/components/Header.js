import { Link } from 'react-router-dom'
import TeamLogo from './TeamLogo'

const Header = (props) => {
    return (
        <div>
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
        </div>
    )
}

export default Header