const Member = ({ member }) => {
    return (
        <div>
            {/* <img src={member.headShotImg.fields.file.url} alt={`Headshot of ${member.firstName} ${member.lastName}.`} /> */}
            <img src={`https://flagsapi.com/${member.homeCountryCode}/shiny/48.png`} alt={`Flag representing team members' home country of ${member.homeCountry}`} />
            <h3>{member.firstName} {member.lastName}</h3>
        </div>
    )
}

export default Member