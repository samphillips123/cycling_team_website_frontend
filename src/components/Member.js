const Member = ({ member }) => {
    return (
        <div>
            {/* <img src={member.headShotImg.fields.file.url} alt={`Headshot of ${member.fullName}.`} /> */}
            <img src={`https://flagsapi.com/${member.homeCountryCode}/shiny/48.png`} alt={`Flag representing team members' home country of ${member.homeCountry}`} />
            <h3>{member.fullName}</h3>
        </div>
    )
}

export default Member