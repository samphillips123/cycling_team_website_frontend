const Member = ({ member }) => {
    return (
        <div className='border-2 border-black hover:border-3 rounded m-4'>
            <img className='w-60' src={member.headShotImg.fields.file.url} alt={`Headshot of ${member.firstName} ${member.lastName}.`} />
            <div className='flex items-center justify-center bg-white'>
                <img className='m-2 bg-white' src={`https://flagsapi.com/${member.homeCountryCode}/shiny/32.png`} alt={`Flag representing team members' home country of ${member.homeCountry}`} />
                <span className='m-2 font-extrabold text-xl bg-white' >{member.firstName} {member.lastName}</span>
            </div>
        </div>
    )
}

export default Member