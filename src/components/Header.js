const Header = (props) => {
    return (
        <div>
            <nav>
                <a href='/' id='teamHomeNav'>TeamName</a> 
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