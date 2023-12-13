const TeamLogo = ({ team }) => {
    return (
        <div className='m-5'>
            <h1>{team.teamName}</h1>
            {/* <img src={team.teamLogo.fields.file.url} alt={`${team.teamName} logo.`} /> */}
        </div>


    )
}

export default TeamLogo