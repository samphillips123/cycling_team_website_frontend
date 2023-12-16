const TeamLogo = ({ team }) => {
    return (
        <div>
            <img className='h-20' src={team.teamLogo.fields.file.url} alt={`${team.teamName} logo.`} />
        </div>


    )
}

export default TeamLogo