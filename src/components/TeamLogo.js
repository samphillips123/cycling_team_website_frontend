const TeamLogo = ({ team }) => {
    return (
        <div className=''>
            {/* <h1>{team.teamName}</h1> */}
            <img className='h-20' src={team.teamLogo.fields.file.url} alt={`${team.teamName} logo.`} />
        </div>


    )
}

export default TeamLogo