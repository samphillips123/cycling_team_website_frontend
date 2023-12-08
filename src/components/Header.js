import { Link } from 'react-router-dom'
import TeamLogo from './TeamLogo'

const Header = (props) => {
    return (
        <div class='header'>
            <div class='headerLogo'>
                <Link to={'/'}>
                    {props.mainContent.map((team) => <TeamLogo team={team} key={team._id} />)}
                </Link>
            </div>
            <div class='headerNav'>
                <Link to={'/team/'} class='headerNavTabs' >
                    <h3>Team</h3>
                </Link>
                <Link to={'/partners/'} class='headerNavTabs' >
                    <h3>Partners</h3>
                </Link>
                <Link to={'/calendar/'} class='headerNavTabs' >
                    <h3>Calendar</h3>
                </Link>
                <Link to={'/racingnews/'} class='headerNavTabs' >
                    <h3>Racing</h3>
                </Link>
                <Link to={'/news/'} class='headerNavTabs' >
                    <h3>News</h3>
                </Link>
            </div>
        </div>
    )
}

export default Header