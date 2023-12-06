import TeamLogo from './TeamLogo'

const Header = (props) => {
    return (
        <div>
            <nav>
                <a href='/'>
                    {props.mainContent.map((team) => <TeamLogo team={team} key={team._id} />)}
                </a>
                {/* <a href='/' id='teamHomeNav'>{mainContent.teamName}</a>  */}
                {/* The link for home will be replaced with a variable and rendered to the left of the header */}
                <a href='/team/' class='pageLinks'>Team</a>
                <a href='/partners/' class='pageLinks'>Partners</a>
                <a href='/calendar/' class='pageLinks'>Calendar</a>
                <a href='/racingnews/' class='pageLinks'>Racing</a>
                <a href='/news/' class='pageLinks'>News</a>
            </nav>
        </div>
    )
}

export default Header